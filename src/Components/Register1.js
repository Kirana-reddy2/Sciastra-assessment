import React, { useState } from 'react';
import { Button, Input, Label, FormGroup, Form, Col, Row } from 'reactstrap';
import axios from 'axios';
import './Register1.css';
import { useNavigate } from 'react-router-dom';

function Register1(args) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  let [formdata, setFormdata] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:3000/insert", formdata);
      console.log(response);
      alert(response.data);
     // setFormdata("");
      if (response.status === 200) {
        navigate('/Login');
      }

      setFormdata({
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: ""
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleFormdata = (e) => {
    let { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
    console.log(formdata);
  };

  const toggle = () => setModal(!modal);

  return (
    <div className='Main-box5'>
      <div id='Form'>
        <h3>
          <Form onSubmit={handlesubmit}>
            {/* Email and Password Row */}
            <Row form className="mb-3">
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formdata.email}
                    onChange={handleFormdata}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={formdata.password}
                    onChange={handleFormdata}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            {/* Address and City Row */}
            <Row form className="mb-3">
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input
                    id="exampleAddress"
                    name="address"
                    placeholder="1234 Main St"
                    value={formdata.address}
                    onChange={handleFormdata}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input
                    id="exampleCity"
                    name="city"
                    placeholder="City"
                    value={formdata.city}
                    onChange={handleFormdata}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            {/* State and Zip Row */}
            <Row form className="mb-3">
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input
                    id="exampleState"
                    name="state"
                    placeholder="State"
                    value={formdata.state}
                    onChange={handleFormdata}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input
                    id="exampleZip"
                    name="zip"
                    placeholder="Zip Code"
                    value={formdata.zip}
                    onChange={handleFormdata}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            {/* Submit Button */}
            <Button id='Signin' isOpen={modal} toggle={toggle} {...args} style={{ width: "100%", padding: "10px", backgroundColor:"darkorchid",border:"none",color:'white',marginTop:"1rem"}}>
              <h4>Register</h4>
            </Button>
          </Form>
        </h3>
      </div>
    </div>
  );
}

export default Register1;
