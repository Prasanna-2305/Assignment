import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Page1 from './Component/Pages/Page1';
import Page2 from './Component/Pages/Page2';
import Page3 from './Component/Pages/Page3';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Routes>
    <Route  exact path ="/" element ={<Home />} />
    <Route  path ="/Page1" element ={<Page1 />} />
    <Route  path ="/Page2" element ={<Page2 />} />
    <Route  path ="/Page3" element ={<Page3 />} />
    </Routes>
    </Router> 
    </div>
  );
}

export default App;
