import React from 'react'
import './Signuplogin.css';
import { useState,useContext } from 'react';
import { Card, InputGroup,Form,Button,Row,Col,FloatingLabel } from 'react-bootstrap';
import { faFacebook,  faGoogle, faLinkedin, faXTwitter, faEnvelope, faYoutube,faEdge, faSEnvelop, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/local_svg3.svg';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

function Signuplogin() {
  const [showLoginButton, setShowLoginButton] = useState(false);

  const handleToggleLoginButton = () => {
    setShowLoginButton(!showLoginButton);
  };
  const { login } = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isLoginMode && password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = isLoginMode
        ? await axios.post('/api/login', { email, password })
        : await axios.post('/api/signup', { email, password, username });

      // Handle successful response (e.g., save token, redirect)
      login(response.data);  // Assuming response.data contains the user data and token
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const toggleFormMode = () => {
    setIsLoginMode(!isLoginMode);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
  };

  
  return (
    <div className='div_sign'>
              <Row className='img_col2' >
              <div className='title_box'>
              <h1 className="display-4 ">Create an account to proceed further</h1>
                </div>
            <Card className="card_sign" style={{ width: '20rem',padding:'1.5rem'}}>
      <Card.Body>
        <Card.Title className="card_title_sign_up"style={{alignItems:'center',pointerEvents: 'none',}}>{isLoginMode ? 'Login' : 'Sign Up'}</Card.Title>
        <hr  style={{ color:'black'}}/>
        <Form onSubmit={handleFormSubmit}>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control 
        type="email" 
        placeholder="name@example.com"     
        value={email}        
        onChange={(e) => setEmail(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3"  
 >
        <Form.Control 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
          />
        
      </FloatingLabel>
      {!isLoginMode && (
          <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FloatingLabel>
        )}
      </Form>
      <Button className="btn_sign" color='primary'> {isLoginMode ? 'Login' : 'Sign Up'}</Button>  
        <h6 className="cl-h6" onClick={toggleFormMode} >{isLoginMode ? 'Dont have an account signup?':'Already have an account' }</h6>
        <Row>
          <Col><hr style={{ color:'black'}}/></Col>
          <Col><div className='card_title_sign_up2'>Or</div></Col>
          <Col><hr style={{ color:'black'}} /></Col>
        </Row>
        <Button className="btn_sign_g" variant='primary'>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          Sign in with google
        </Button>
        <Button className="btn_sign_f">
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        Sign in with Facebook
        </Button>
        <Button className="btn_sign_x">
        <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
        Sign in with X
        </Button>
        </Card.Body>
    </Card>
    
    </Row>
        

    </div>
  )
}

export default Signuplogin;