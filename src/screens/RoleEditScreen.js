import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetailsById, updateUser } from '../actions/userActions'
import { USER_DETAILS_ID_RESET, USER_UPDATE_RESET } from '../constants/userConstants'

const RoleEditScreen = ({ history, match }) => {
    const userId = match.params.id

    const [role, setRole] = useState('')
    const [employeeCode, setEmployeeCode] = useState('')
    const [isManager, setIsManager] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdate = useSelector(state => state.userUpdate)
    const { success:successUpdate } = userUpdate
    

    const userDetailsById = useSelector(state => state.userDetailsById)
    const { loading, error, user } = userDetailsById
    
    useEffect(() => {
        if (userInfo  && (userInfo.role === 'hr' || userInfo.role === 'hr-manager' || userInfo.role === 'admin')) {
            
           
            if(successUpdate) {
                dispatch({
                    type: USER_UPDATE_RESET
                })
                dispatch({
                    type: USER_DETAILS_ID_RESET
                })
                history.push('/admin/userlist')
            } else {
            if(!user.employee || userId !== user.employee._id) {
                dispatch(getUserDetailsById(userId))
            } else {
                setRole(user.employee.role)
                setIsActive(user.employee.isActive)
                setIsManager(user.employee.isManager)
                setEmployeeCode(user.employee.employeeCode)
            }
        }
        } else {
            history.push('/')
        }
        
        
    }, [history, successUpdate, userInfo, userId, user, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({
            _id: userId,
            employeeCode,
            role,
            isActive,
            isManager
        }))
        history.push('/admin/userlist')
        //history.push('/admin/userlist')
    }
    return (
        <>
            {user.employee && (
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
                    <Link to='/myleave'>
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
            <h1>Update {user.employee.email} Role</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {successUpdate && <Message variant='success'>Profile Created</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='isActive'>
                        <Form.Check
                        type='checkbox' 
                        label='Is Active'
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>
                    <Form.Group controlId='isManager'>
                        <Form.Check
                        type='checkbox' 
                        label='Is Manager'
                        checked={isManager}
                        onChange={(e) => setIsManager(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>
                    <Form.Group controlId="formGridRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control 
                            as="select" 
                            size='sm'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}>
                                <option value=''>Select...</option>
                                <option value='hr'>HR</option>
                                <option value='employee'>EMPLOYEE</option>
                                <option value='agent'>AGENT</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='employeeCode'>
                            <Form.Label>Employee Code</Form.Label>
                            <Form.Control 
                            type='employeeCode' 
                            placeholder='Enter Employee Code'
                            value={employeeCode}
                            onChange={(e) => setEmployeeCode(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
            </Col>
            </Row>
            )}
            </>
    )
}

export default RoleEditScreen
