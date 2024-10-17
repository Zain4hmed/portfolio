import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar.jsx'; // Make sure file casing matches
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


ReactDOM
.createRoot(document.getElementById('root'))
.render(
  <>
    <div className='zainapp'>
      <Navbar />
      <App />
      <Footer/>
    </div>
  </>
);
