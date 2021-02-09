import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LoginImg from '../../img/call-center.jpg';
import Logo from '../../img/outcess-logo.png';
import './Login.css';

const LoginPage = () => {
  return (
    <div className="loginpage-wrapper">
      <Container className='loginpage-container'>
        <Row>
          <Col>
            <div className='login-img'>
              <img src={LoginImg}/>
            </div>
          </Col>
          <Col className='form-col'> 
            <div className='logo'>
              <img src={Logo}/>
            </div>
            <Form>
              <Form.Group className='form-group email' controlId="formBasicEmail">
              <i class="fas fa-user pr-3"></i>
                <Form.Label className='login-label'>Email address</Form.Label>
                <Form.Control autoFocus type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className='form-group password' controlId="formBasicPassword">
              <i class="fas fa-unlock pr-3"></i>
                <Form.Label className='login-label'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;