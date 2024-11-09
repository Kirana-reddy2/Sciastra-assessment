import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div>
      <header>
        <nav>
          <h1 className="logo">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/037/324/861/non_2x/initial-letter-sa-logo-or-as-logo-design-template-vector.jpg" 
              style={{ width: '2rem' }} 
              alt="SciAstra Logo" 
            />
            SciAstra
          </h1>
          <ul className="nav-links">
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/about" className='link'>About</Link></li>
            <li><Link to="/course/">Courses</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/login" className="signin-link">Sign In</Link></li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search for courses, topics..." />
            <button>Search</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
