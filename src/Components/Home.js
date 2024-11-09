import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Courses from './Courses';
function Home() {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div className="carousel">
          <div className="carousel-item active">
            <h2>Learn from Industry Experts</h2>
            <p>Explore top-rated courses and grow your skills.</p>
            <Link to="/course">
            <button 
             
              style={{
                backgroundColor: 'darkorchid',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '1.5rem',
                border: 'none',
                padding: '1rem',
              }}
            >
              Browse Courses
            </button>
            </Link>
          </div>
          <div className="carousel-item">
            <h2>Exclusive Discounts</h2>
            <p>Sign up today and enjoy up to 50% off on select courses.</p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="carousel-controls">
          <button >&#10094;</button>
          <button>&#10095;</button>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <h2>Popular Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqF7WGmlwGKoQo44ktDS87R-qiy1tY-p-UuQ&s"
              alt="Artificial Intelligence"
            />
            <h3 style={{ marginRight: '5rem', marginTop: '1rem' }}>Artificial Intelligence</h3>
            <p style={{ padding: '0.3rem', marginRight: '8.5rem' }}>Total AI concepts</p>
            <p className="price" style={{ marginRight: '7.7rem', marginTop: '0.3rem' }}>
              &#8377;50000/- <span className="original-price">&#8377;60000/-</span>
            </p><Link to="/payment">
            <button style={{ marginRight: '9.6rem', marginTop: '0.7rem', fontWeight: 'bold' }}>
              Enroll Now
            </button>
            </Link>
          </div>
          <div className="course-card">
            <img
              src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg"
              alt="Data Science"
            />
            <h3 style={{ marginRight: '7.7rem', marginTop: '1rem' }}>Data Science</h3>
            <p style={{ padding: '0.3rem' }}>Master data science from scratch.</p>
            <p className="price" style={{ marginRight: '7rem', marginTop: '0.3rem' }}>
              &#8377;50000/- <span className="original-price">&#8377;60000/-</span>
            </p>
            <Link to="/payment">
            <button style={{ marginRight: '9rem', marginTop: '0.7rem', fontWeight: 'bold' }}>
              Enroll Now
            </button>
            </Link>
          </div>
          <div className="course-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrV5bjNnKJf3rK81Iw8WEXlHnkMUCPu_cEg&s"
              alt="Machine Learning"
            />
            <h3 style={{ marginRight: '5rem', marginTop: '1rem' }}>Machine Learning</h3>
            <p style={{ padding: '0.3rem', marginRight: '2.3rem' }}>Introduction to ML concepts.</p>
            <p className="price" style={{ marginRight: '7rem', marginTop: '0.3rem' }}>
              &#8377;30000/- <span className="original-price">&#8377;40000/-</span>
            </p><Link to="/payment">
            <button style={{ marginRight: '9rem', marginTop: '0.7rem', fontWeight: 'bold' }}>
              Enroll Now
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section id="blog" className="blog">
        <h2>Latest Blog Posts</h2>
        <div className="blog-list">
          <div className="blog-card">
            <h3>Data Science Career Path</h3>
            <p>Steps to become a data scientist.</p>
          <Link to="/article">Read More</Link> 
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
