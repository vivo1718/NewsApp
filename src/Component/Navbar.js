import React from 'react'
import './Navbar.css';
import { useEffect,useState } from 'react';
import Bread from './Bread';
export default function Navbar() {
    
  const [isScrolled, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) { // Adjust 50 to the desired scroll threshold
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-sm ${isScrolled ? 'navbar-scrolled' : ''}`} >
      <a className="navbar-brand" href="#">NewsSource</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      
       <Bread></Bread> 
    </nav>
  )
}
