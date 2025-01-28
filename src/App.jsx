import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>

      <div className="App">
        
        <div id="navbar" className="bg-gray-800 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
