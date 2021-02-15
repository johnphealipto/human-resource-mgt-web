import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, ListGroup, Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { updateUserPassword } from '../actions/userActions'
import { USER_UPDATE_PASSWORD_RESET } from '../constants/userConstants'

const PasswordScreen = ({ history }) => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()

    const userUpdatePassword = useSelector(state => state.userUpdatePassword)
    const { error, success } = userUpdatePassword

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        } else {
            if(success) {
                dispatch({
                    type: USER_UPDATE_PASSWORD_RESET
                })
                history.push('/home')
            }
        }
    }, [dispatch, success, history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if(newPassword !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //Dispatch
            dispatch(updateUserPassword({
                currentPassword,
                newPassword
            }))
            //setShow(true)
        }
        
        
    }

    return (
        <>
        <Row>
        <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Password Update</strong>
            <small>1 mins ago</small>
          </Toast.Header>
          <Toast.Body>Your Password has been updated!</Toast.Body>
        </Toast>
         </Col>
         </Row>
        <Row className='ml-4 mr-4 py-4'>
        
        <Col md={4}>
            <ListGroup>
                <ListGroup.Item variant="info">
                    <Link to='/home'>
                        <strong><i className='fas fa-user'></i> Home</strong>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <Link to='/dashboard'>
                        <strong><i className='fas fa-user'></i> Personal Details</strong>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <Link to='/updatepassword'>
                        <strong><i className='fas fa-user'></i> Update Password</strong>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <Link to='/dashboard'>
                        <strong><i className='fas fa-school'></i> Education</strong>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <Link to='/dashboard'>
                        <strong><i className='fas fa-building'></i> My Leave Application</strong>
                    </Link>
                </ListGroup.Item>
                {
                    (userInfo.role === 'hr') && (
                        <>
                        <ListGroup.Item variant="primary">
                            <strong>ADMIN SECTION</strong>
                            
                        </ListGroup.Item>
                        <ListGroup.Item variant="info">
                            <Link to='/dashboard'>
                                <strong><i className='fas fa-building'></i> All Leave Applications</strong>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="info">
                            <Link to='/admin/userlist'>
                                <strong><i className='fas fa-users'></i> All Employees</strong>
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item variant="info">
                            <Link to='/admin/register'>
                                <strong><i className='fas fa-users'></i> Register an Employee</strong>
                            </Link>
                        </ListGroup.Item>
                        </>
                    )
                }
            </ListGroup>
            </Col>
            <Col md={6}>
                <h1>Update Password</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {success && <Message variant='success'>Password Updated</Message>}
               
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='crrentPassword'>
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control 
                        type='password' 
                        placeholder='Enter Password'
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='newpassword'>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control 
                        type='password' 
                        placeholder='Enter New Password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirrmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type='password' 
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
            </Col>
            
        </Row>
        </>
    )
}

export default PasswordScreen
