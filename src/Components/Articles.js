import React from 'react';
import './Articles.css';
import { Card, CardTitle, CardText, Button, Col, Row } from 'reactstrap';

function Articles() {
    return (
        <div className="articles-wrapper">
            {/* Main Content */}
            <div className="articles-container">
                <div className="text-content">
                    <h1 style={{ color: 'orange', fontSize: "1.7rem" }}>SciAstra | Blog</h1>
                    <h4 style={{ fontSize: "1.6rem" }}>Where possibilities begin</h4>
                    <br />
                    <p>
                        We’re a leading marketplace platform for learning and teaching online. Explore some of our
                        most popular content and learn something new.
                    </p>
                </div>
                <div className="image-content">
                    <img src="https://blog.udemy.com/wp-content/uploads/2021/07/reading-girl-2.png" alt="Learning illustration" />
                </div>
            </div>
            <hr ></hr>
            <div>

                <div className='info' style={{margin:"2rem"}}>
                    <h1> The Future of Careers in Data Science</h1>
                    <p> Introduction Data Science is one of the fastest-growing fields, offering a plethora of opportunities across industries. In an increasingly data-driven world, organizations need experts who can interpret data, uncover insights, and use this knowledge to guide strategic decisions. The future of data science as a career holds immense promise, driven by technology, innovation, and the exponential growth of data.</p>

                    <h1>Why Data Science?</h1>
                    <p>The role of a data scientist has evolved into a high-demand profession because of several factors:<br></br>

                        Data Explosion: With billions of devices connected to the internet, the amount of data generated daily is staggering. The need for professionals to manage and interpret this data is greater than ever.<br></br>
                        Application in Multiple Industries: From healthcare to retail, finance to entertainment, data science applications span all sectors. This versatility makes it a highly desirable career path.<br></br>
                        Driving Innovation: Data scientists contribute to advancements in machine learning, artificial intelligence, and automation—technologies that are transforming industries and creating new career paths.</p>
                    <h1>Key Skills for Data Science Careers</h1>
                    <p> To thrive in data science, one must master a mix of technical and soft skills, including:<br />

                        Statistical Analysis: Understanding probability, hypothesis testing, and statistical methods is essential for interpreting data.<br />
                        Programming: Proficiency in programming languages such as Python, R, and SQL is foundational in data science.<br />
                        Machine Learning: Knowledge of machine learning algorithms, neural networks, and deep learning is invaluable for predictive modeling.<br />
                        Data Visualization: Communicating insights visually through tools like Tableau, Power BI, or Matplotlib is critical for translating data insights for non-technical stakeholders.
                        <h1>Career Opportunities in Data Science</h1>
                        Data Analyst: Data analysts interpret data to help businesses make decisions, create visualizations, and provide actionable insights.<br />
                        Machine Learning Engineer: These professionals design and implement machine learning algorithms and work with big data platforms to create predictive models.<br />
                        Data Scientist: Data scientists focus on uncovering trends, building models, and making forecasts based on large sets of structured and unstructured data.<br /><br />
                        Data Engineer: Responsible for developing and maintaining data pipelines, data engineers ensure that data flows seamlessly through systems and is accessible for analysis.<br />
                        AI Research Scientist: AI scientists work on the cutting edge of artificial intelligence, developing new algorithms, architectures, and applications for AI systems.</p>

                </div>
            </div>
        </div>

    );
}

export default Articles;
