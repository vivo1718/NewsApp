import React from 'react';
import './Bread.css'; // Import the CSS file
import {  useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import {  Offcanvas,Row,Col,Card,Button,Accordion,Dropdown,NavDropdown } from 'react-bootstrap';
import { ChevronDown, ChevronRight } from 'react-bootstrap-icons';
 const Bread = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState({});
 const navigate = useNavigate();
  const handleClick = () => {
    // Redirect to /signup page
    navigate('/signup');
  };
  const handleToggle2 = (menu) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [menu]: !prevOpen[menu],
    }))};
    const [dropdownOpen, setDropdownOpen] = useState(false);     
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

  const handleToggle = (menu) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [menu]: !prevOpen[menu],
    }))};
  const toggleBreadcrumb = () => {
    setShowBreadcrumb(!showBreadcrumb);
  };
  

  return (   <div className="bread">
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <button className="breadcrumb-icon"  onClick={handleShow}>
        <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
        <ol className={` breadcrumb ${showBreadcrumb ? 'show' : ''}`}>
         <li className="breadcrumb-item "><Link to="/">Home</Link></li>
           <li className="breadcrumb-item"><Link to="/about-us">AboutUs</Link></li>
           <div className="category"><a>Categories <ChevronDown onClick={toggleDropdown} /> {dropdownOpen && (
          <div className="dropdown-content">
            <div className='Col' >
              <div className='div-drop'>Tesla</div><hr className="divider" />
              <div className='div-drop' >Usa</div><hr  className="divider" />
              <div className='div-drop' >Amalgam</div>
            </div>
          </div>
        )}</a></div>
                   <div className="breadcrumb-item"  ><Link to='/signup'>Signup/Login</Link></div>

        </ol>
      </nav>
      
      
      <Offcanvas className="drawer" show={show} onHide={handleClose}  >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="dtitle">NewsSource</Offcanvas.Title>
        </Offcanvas.Header><hr/>
        <Offcanvas.Body>
          {/* Drawer content goes here */}
         <span><Link className="linkt" onClick={handleClose} to="/">HOME</Link></span> <hr/> 
         <span><Link className="linkt" to="/about-us" onClick={handleClose} >About US</Link></span> <hr/> 
         
          <div>
          <Accordion>
            <div
              onClick={() => handleToggle('menu1')}
              aria-controls="submenu1"
              className="accord-div"
              aria-expanded={open.menu1}
            >
              Categories {open.menu1 ? <ChevronDown /> : <ChevronRight />}
            </div>
        
          <Accordion.Collapse in={open.menu1}>
            
              <ul type="none" className="ul1">
                <li><a className="a1" href="#TESLA">TESLA</a></li>
                <li><a className="a1" href="#USA">USA</a></li>
                <li><a className="a1" href="#AMALGAM">AMALGAM</a></li>
              </ul>
            
          </Accordion.Collapse>
        
          </Accordion>
          </div><hr/>
          <span ><Link className="linkt" onClick={handleClose} to="/signup">SignUp/Login</Link></span> <hr/> 

         <span className="linkt3" >Social Profile</span><hr/>
         <Row className="social-icons">
            <Col>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x"  />
              </a>
            </Col>
            <Col>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="fa-x-twitter" size="2x" />
              </a>
            </Col>
            <Col>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="fa-instagram" size="2x" />
              </a>
            </Col>
            
          </Row>

         
            </Offcanvas.Body>
      </Offcanvas>
    </div>
    
    

    
  );
};

export default Bread;