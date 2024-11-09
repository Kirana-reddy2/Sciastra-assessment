import React, { useState } from 'react';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './Components/About';
import Login from './Components/Login';
import Courses from './Components/Courses';
import Blog from './Components/Blog';
import Admin from './Components/Admin';
import Articles from './Components/Articles';
import Payment from './Components/Payment';
import Register from './Components/Register1';


function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Track if the user is an admin
  const [showAuthModal, setShowAuthModal] = useState(false); // Control modal visibility

  // Open modal when user tries to access the blog
  const handleBlogClick = () => {
    setShowAuthModal(true);
  };

  // Handle successful admin authentication
  const handleAuthSuccess = () => {
    setIsAdmin(true);
    setShowAuthModal(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="course" element={<Courses />} />
          <Route path="article" element={<Articles/>} />
          <Route path="payment" element={<Payment/>} />
          <Route path="register" element={<Register/>} />
          <Route
            path="blog"
            element={
              isAdmin ? (
                <Blog /> // Show Blog if the user is authenticated
              ) : (
                <button onClick={handleBlogClick}>Open Admin Authentication</button> // Button to open the modal
              )
            }
          />
        </Routes>
        <Footer />

        {/* Show the Admin authentication modal if required */}
        {showAuthModal && (
          <Admin
            onClose={() => setShowAuthModal(false)}
            onAuthSuccess={handleAuthSuccess}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
