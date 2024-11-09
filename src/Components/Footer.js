import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="footer-logo">
          <h1>SciAstra</h1>
          <p>Learn, Grow, Succeed.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Courses</h3>
            <ul>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Design</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span>Instagram</span>
              </a>
              <a href="https://www.twitter.com/YourHandle" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span>Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SciAstra - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
