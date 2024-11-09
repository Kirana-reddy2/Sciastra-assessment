import React, { useState } from 'react';
import { Button, Input, Label, FormGroup, Form, Col } from 'reactstrap';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(args) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  
  let [email, setEmail] = useState('');
  let [password, setpassword] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:3000/login", { email, password });
      console.log(response);
      alert(response.data);
      setEmail('');
      setpassword('');
      if (response.status === 200) {
        navigate('/Products');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <div id="main-container">
      <Form id="login-form" onSubmit={handlesubmit}>
        <h3>Login</h3>
        <Col md={6}>
          <FormGroup id="input-email">
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup id="input-password">
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Button id="login-button" isOpen={modal} toggle={toggle} {...args}>
          Login
        </Button>
        <div className="links">
          <Link id="register-link" to="/register">Register</Link>
          <Link id="forgot-link" to="/register">Forgot Password?</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
