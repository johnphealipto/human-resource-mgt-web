import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import Message from '../components/Message'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LoginImg from '../img/call-center.jpg';
import Logo from '../img/outcess-logo.png';
import '../styles/LoginScreen.css';
import { login } from '../actions/userActions'
import { css } from '@emotion/css'


//Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoginTestScreen = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    
    
    useEffect(() => {
        if(userInfo) {
            history.push('/home')
        }
    }, [history, userInfo])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
  return (
    <div className="loginpage-wrapper">
      <Container className='loginpage-container'>
        <Row>
          <Col>
            <div className='login-img d-lg-block d-md-none'>
              <img src={LoginImg}/>
            </div>
          </Col>
          <Col className='loginform-col'> 
            <div className='logo'>
              <img src={Logo}/>
            </div>
            {error && <Message variant='danger'>{error}</Message>}
            <Form onSubmit={submitHandler}>
              <Form.Group className='form-group email' controlId="formBasicEmail">
                <i class="fas fa-user pr-3"></i>
                <Form.Label className='login-label'>Email address</Form.Label>
                <Form.Control 
                    autoFocus 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email" />
              </Form.Group>

              <Form.Group className='form-group password' controlId="formBasicPassword">
                <i class="fas fa-unlock pr-3"></i>
                <Form.Label className='login-label'>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
              </Form.Group>
              <Button type='submit' variant='primary' className='btn btn-block'>
                    Sign In
                </Button>
                <Link to='/forgotpassword' className='forget-password'>
                    <p>Forgot password?</p>
                </Link>
            </Form>
            <div className="loading">
              {loading &&
                <ScaleLoader
                css={override}
                sizeUnit={"px"}
                size={150}
                color={"#123abc"}
                loading={loading}
                />
              }
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginTestScreen;