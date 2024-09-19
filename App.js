import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Your custom styles, if any
import Home from './Components/Home';
import './Components/Navbar.css';
import './Components/Gallery.css'; 
import Gallery from './Components/Gallery';
import Team from './Components/Team';
import './Components/Team.css'; 
import Contact from './Components/Contact';
import './Components/Contact.css'; 
import About from './Components/About';
import './Components/About.css'; 
import './Components/Title.css';
import Title from './Components/Title';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Events from './Components/Events';
import './Components/Event.css'; 
import Details from './Components/Details';

function App() {
  return (
   <div>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<Details />} />  {/* Event details page */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
     
   </div>
    
     
    
     
    
  );
}

export default App;
