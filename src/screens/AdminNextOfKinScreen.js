import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { createNextOfKin, createNextOfKinEmpId, getNextOfKinDetailsEmpId, updateNextOfKin } from '../actions/nextOfKinActions'
import { NOK_CREATE_EMPLOYEE_RESET, NOK_DETAILS_EMPLOYEE_RESET, NOK_UPDATE_RESET } from '../constants/nextOfKinConstants'


const AdminNextOfKinScreen = ({ history, match }) => {
    const userId = match.params.id
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [relationship, setRelationship] = useState('')
    

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const nextOfKinDetailsEmpId = useSelector(state => state.nextOfKinDetailsEmpId)
    const { loading, nextOfKin } = nextOfKinDetailsEmpId

    const nextOfKinUpdate = useSelector(state => state.nextOfKinUpdate)
    const { error:errorUpdate, success:successUpdate } = nextOfKinUpdate

    const nextOfKinCreateEmpId = useSelector(state => state.nextOfKinCreateEmpId)
    const { error:errorCreate, success:successCreate } = nextOfKinCreateEmpId

  

    useEffect(() => {

        if(userInfo  && (userInfo.role === 'hr' || userInfo.role === 'hr-manager' || userInfo.role === 'admin')) {
            
            if(successUpdate || successCreate) {
                dispatch({
                    type: NOK_UPDATE_RESET
                })
                dispatch({
                    type: NOK_DETAILS_EMPLOYEE_RESET
                })
                dispatch({
                    type: NOK_CREATE_EMPLOYEE_RESET
                })
                history.push('/home')
            } else {
            if(!nextOfKin || nextOfKin.employee  !== userId ) {
                dispatch(getNextOfKinDetailsEmpId(userId))
            } else {
                setFirstname(nextOfKin.firstname)
                setLastname(nextOfKin.lastname)
                setContact(nextOfKin.contact)
                setEmail(nextOfKin.email)
                setRelationship(nextOfKin.relationship)

            }
        }
        } else {
            history.push('/')
    }
    }, [dispatch, history, nextOfKin, successUpdate, userId, successCreate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateNextOfKin({
            _id: nextOfKin._id,
            firstname,
            lastname,
            contact,
            email,
            relationship
        }))
       
       
        
    }

    const createsubmitHandler= (e) => {
        e.preventDefault()
        dispatch(createNextOfKinEmpId({
            employee: userId,
            firstname,
            lastname,
            contact,
            email,
            relationship
        }))
       
       
        
    }


    return (
        <>
         
        <Row className='ml-4 mr-4 py-4'>
        <Col md={4}>
        <ListGroup>
            <ListGroup.Item variant="success">
                <Link to='/admin/userlist'>
                    <strong><i className='fas fa-users'></i> All Employees</strong>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
                <Link to={`/admin/user/${userId}/edit`}>
                    <strong><i className='fas fa-user'></i>  Details</strong>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
                <Link to={`/admin/profile/${userId}/edit`}>
                    <strong><i className='fas fa-user'></i>  Profile</strong>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
                <Link to={`/admin/education/${userId}/edit`}>
                    <strong><i className='fas fa-school'></i>  Education</strong>
                </Link>
            </ListGroup.Item>
            <ListGroup.Item variant="success">
                <Link to={`/admin/nextofkin/${userId}/edit`}>
                    <strong><i className='fas fa-user'></i> Employee Next Of Kin</strong>
                </Link>
            </ListGroup.Item>
            
        </ListGroup>
        </Col>
        <Col md={8}>
                <h1>Next Of Kin</h1>
               
                
                {successUpdate && <Message variant='success'>Profile Updated</Message>}
                {loading && <Loader />}
                {
                    nextOfKin ? (
                        <Form onSubmit={submitHandler}>
                        <Form.Row>
                            <Form.Group  as={Col} controlId='firstname'>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control 
                                type='firstname' 
                            
                                placeholder='Enter Firstname'
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='lastname'>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control 
                                type='lastname' 
                                
                                placeholder='Enter Lastname'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                type='email' 
                                
                                placeholder='Enter  Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            
                    
                            
                        </Form.Row>
                        <Form.Row>
                            
                            <Form.Group  as={Col} controlId='contact'>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control 
                                type='contact' 
                                placeholder='Enter Contact'
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='relationship'>
                                <Form.Label>Relationship</Form.Label>
                                <Form.Control 
                                type='relationship' 
                                placeholder='Enter Relationship'
                                value={relationship}
                                onChange={(e) => setRelationship(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                    
                            
                        </Form.Row>
                        
                    
                        <Button type='submit' variant='primary' className='btn-block'>
                            Update
                        </Button>
                    </Form>
                    ) : (
                        <Form onSubmit={createsubmitHandler}>
                        <Form.Row>
                            <Form.Group  as={Col} controlId='firstname'>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control 
                                type='firstname' 
                            
                                placeholder='Enter Firstname'
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='lastname'>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control 
                                type='lastname' 
                                
                                placeholder='Enter Lastname'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                type='email' 
                                
                                placeholder='Enter  Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            
                    
                            
                        </Form.Row>
                        <Form.Row>
                            
                            <Form.Group  as={Col} controlId='contact'>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control 
                                type='contact' 
                                placeholder='Enter Contact'
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='relationship'>
                                <Form.Label>Relationship</Form.Label>
                                <Form.Control 
                                type='relationship' 
                                placeholder='Enter Relationship'
                                value={relationship}
                                onChange={(e) => setRelationship(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                    
                            
                        </Form.Row>
                        
                    
                        <Button type='submit' variant='primary' className='btn-block'>
                            Create
                        </Button>
                    </Form>
                    )
                }
                
            </Col>
        </Row>
        </>
    )
}

export default AdminNextOfKinScreen
