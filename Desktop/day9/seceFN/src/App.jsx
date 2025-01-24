import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// Import other pages
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const navigate = useNavigate();

  // Function to scroll to a specific section within the same page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Navigation Bar with Buttons */}
      <nav>
        <ul>
          {/* Button for Home page navigation */}
          <li>
            <button onClick={() => navigate('/')}>Home</button>
          </li>
          
          {/* Buttons for scrolling to sections */}
          <li>
            <button onClick={() => scrollToSection('trending')}>Trending</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('exclusive')}>Exclusive</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('offers')}>Offers</button>
          </li>

          {/* Buttons for navigating to About and Contact pages */}
          <li>
            <button onClick={() => navigate('/about')}>About</button>
          </li>
          <li>
            <button onClick={() => navigate('/contact')}>Contact</button>
          </li>
        </ul>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 id="det">Welcome to the Home Page!</h1>

              {/* Trending Section */}
              <div id="trending" className="section">
                <h2 id="det">Trending Section</h2>
                <p id="set">Content for trending...</p>
              </div>

              {/* Exclusive Section */}
              <div id="exclusive" className="section">
                <h2 id="det">Exclusive Section</h2>
                <p id="set">Content for exclusive...</p>
              </div>

              {/* Offers Section */}
              <div id="offers" className="section">
                <h2 id="det">Offers Section</h2>
                <p id="set">Content for offers...</p>
              </div>

              {/* About Section */}
              <div id="about" className="section">
                <h2 id="det">About Section</h2>
                <p id="set">Content for the about section...</p>
              </div>

              {/* Contact Section */}
              <div id="contact" className="section">
                <h2 id="det">Contact Section</h2>
                <p id="set">Content for the contact section...</p>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
