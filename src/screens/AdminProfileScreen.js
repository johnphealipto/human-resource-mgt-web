import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { createProfileEmpId, getProfileDetailsEmpId, updateProfile } from '../actions/profileActions'
import { PROFILE_CREATE_EMPLOYEE_RESET, PROFILE_DETAILS_EMPLOYEE_RESET, PROFILE_UPDATE_RESET } from '../constants/profileConstants'
import FixedNavbar from '../components/FixedNavbar';

const AdminProfileScreen = ({ history, match }) => {
    const userId = match.params.id


    const [dob, setDob] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [privateEmail, setPrivateEmail] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfJoining, setDateOfJoining] = useState('')
    const [dateOfLastPromotion, setDateOfLastPromotion] = useState('')
    const [address, setAddress] = useState('')
    const [stateOfOrigin, setStateOfOrigin] = useState('')
    const [lga, setLga] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [religion, setReligion] = useState('')

   

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const profileDetailsEmpId = useSelector(state => state.profileDetailsEmpId)
    const { loading, profile } = profileDetailsEmpId

    const profileUpdate = useSelector(state => state.profileUpdate)
    const { error:errorUpdate, success:successUpdate } = profileUpdate

    const profileCreateEmpId = useSelector(state => state.profileCreateEmpId)
    const { error:errorCreate, success:successCreate } = profileCreateEmpId

  

    useEffect(() => {

        if(userInfo  && (userInfo.role === 'hr' || userInfo.role === 'hr-manager' || userInfo.role === 'admin')) {
            
            if(successUpdate || successCreate) {
                dispatch({
                    type: PROFILE_UPDATE_RESET
                })
                dispatch({
                    type: PROFILE_DETAILS_EMPLOYEE_RESET
                })
                dispatch({
                    type: PROFILE_CREATE_EMPLOYEE_RESET
                })
                history.push('/admin/userlist')
            } else {
            if(!profile || profile.employee !== userId) {
                dispatch(getProfileDetailsEmpId(userId))
            } else {
                setDob(profile.dob)
                setContactNo(profile.contactNo)
                setPrivateEmail(profile.privateEmail)
                setGender(profile.gender)
                setDateOfJoining(profile.dateOfJoining)
                setDateOfLastPromotion(profile.dateOfLastPromotion)
                setAddress(profile.address)
                setStateOfOrigin(profile.stateOfOrigin)
                setLga(profile.lga)
                setMaritalStatus(profile.maritalStatus)
                setReligion(profile.religion)

            }
        }
        } else {
            history.push('/') 
    }
    }, [dispatch, history, profile, userId, successUpdate, successCreate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile({
            _id: profile._id,
            dob,
            contactNo,
            privateEmail,
            gender,
            dateOfJoining,
            dateOfLastPromotion,
            address,
            stateOfOrigin,
            lga,
            maritalStatus,
            religion
        }))
       
       
        
    }

    const createsubmitHandler= (e) => {
        e.preventDefault()
        dispatch(createProfileEmpId({
            employee: userId,
            dob,
            contactNo,
            privateEmail,
            gender,
            dateOfJoining,
            dateOfLastPromotion,
            address,
            stateOfOrigin,
            lga,
            maritalStatus,
            religion
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
                <h1>My Profile</h1>
               
               
                {successUpdate && <Message variant='success'>Profile Updated</Message>}
                {loading && <Loader />}
                {
                    profile ? (
                        <Form onSubmit={submitHandler}>
                        <Form.Row>
                            <Form.Group  as={Col} controlId='dateOfBirth'>
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control 
                                type='date' 
                            
                                placeholder='Enter Date Of Birth'
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='contactNo'>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control 
                                type='contactNo' 
                                
                                placeholder='Enter Contact Number'
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='privateEmail'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                type='privateEmail' 
                                
                                placeholder='Enter Private Email'
                                value={privateEmail}
                                onChange={(e) => setPrivateEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            
                    
                            
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control 
                                as="select" 
                                size='sm'
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}>
                                    <option value=''>Select...</option>
                                    <option value='MALE'>MALE</option>
                                    <option value='FEMALE'>FEMALE</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='dateOfJoining'>
                                <Form.Label>Date Of Joining</Form.Label>
                                <Form.Control 
                                type='date' 
                                placeholder='Enter Date Of Joining'
                                value={dateOfJoining}
                                onChange={(e) => setDateOfJoining(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='dateOfLastPromotion'>
                                <Form.Label>Date Of Last Promotion</Form.Label>
                                <Form.Control 
                                type='date' 
                                placeholder='Enter Date Of Last Promotion'
                                value={dateOfLastPromotion}
                                onChange={(e) => setDateOfLastPromotion(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                    
                            
                        </Form.Row>
                        <Form.Row>
                            
                            <Form.Group  as={Col} controlId='address'>
                                <Form.Label>Address</Form.Label>
                                <Form.Control 
                                type='address' 
                                placeholder='Enter Address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='stateOfOrigin'>
                                <Form.Label>State Of Origin</Form.Label>
                                <Form.Control 
                                type='stateOfOrigin' 
                                placeholder='Enter State Of Origin'
                                value={stateOfOrigin}
                                onChange={(e) => setStateOfOrigin(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='lga'>
                                <Form.Label>LGA</Form.Label>
                                <Form.Control 
                                type='lga' 
                                placeholder='Enter LGA'
                                value={lga}
                                onChange={(e) => setLga(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        
                    
                            
                        </Form.Row>
                        <Form.Row>
                            
                            <Form.Group  as={Col} controlId='maritalStatus'>
                                <Form.Label>Marital Status</Form.Label>
                                <Form.Control 
                                type='maritalStatus' 
                                placeholder='Enter Marital Status'
                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='religion'>
                                <Form.Label>Religion</Form.Label>
                                <Form.Control 
                                type='religion' 
                                placeholder='Enter Religion'
                                value={religion}
                                onChange={(e) => setReligion(e.target.value)}
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
                                <Form.Group  as={Col} controlId='dateOfBirth'>
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control 
                                    type='date' 
                                
                                    placeholder='Enter Date Of Birth'
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group  as={Col} controlId='contactNo'>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control 
                                    type='contactNo' 
                                    
                                    placeholder='Enter Contact Number'
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group  as={Col} controlId='privateEmail'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                    type='privateEmail' 
                                    
                                    placeholder='Enter Private Email'
                                    value={privateEmail}
                                    onChange={(e) => setPrivateEmail(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                
                        
                                
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control 
                                    as="select" 
                                    size='sm'
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                        <option value=''>Select...</option>
                                        <option value='MALE'>MALE</option>
                                        <option value='FEMALE'>FEMALE</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group  as={Col} controlId='dateOfJoining'>
                                    <Form.Label>Date Of Joining</Form.Label>
                                    <Form.Control 
                                    type='date' 
                                    placeholder='Enter Date Of Joining'
                                    value={dateOfJoining}
                                    onChange={(e) => setDateOfJoining(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group  as={Col} controlId='dateOfLastPromotion'>
                                    <Form.Label>Date Of Last Promotion</Form.Label>
                                    <Form.Control 
                                    type='date' 
                                    placeholder='Enter Date Of Last Promotion'
                                    value={dateOfLastPromotion}
                                    onChange={(e) => setDateOfLastPromotion(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                            
                        
                                
                            </Form.Row>
                            <Form.Row>
                                
                                <Form.Group  as={Col} controlId='address'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control 
                                    type='address' 
                                    placeholder='Enter Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group  as={Col} controlId='stateOfOrigin'>
                                    <Form.Label>State Of Origin</Form.Label>
                                    <Form.Control 
                                    type='stateOfOrigin' 
                                    placeholder='Enter State Of Origin'
                                    value={stateOfOrigin}
                                    onChange={(e) => setStateOfOrigin(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group  as={Col} controlId='lga'>
                                    <Form.Label>LGA</Form.Label>
                                    <Form.Control 
                                    type='lga' 
                                    placeholder='Enter LGA'
                                    value={lga}
                                    onChange={(e) => setLga(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                            
                        
                                
                            </Form.Row>
                            <Form.Row>
                                
                                <Form.Group  as={Col} controlId='maritalStatus'>
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Control 
                                    type='maritalStatus' 
                                    placeholder='Enter Marital Status'
                                    value={maritalStatus}
                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group  as={Col} controlId='religion'>
                                    <Form.Label>Religion</Form.Label>
                                    <Form.Control 
                                    type='religion' 
                                    placeholder='Enter Religion'
                                    value={religion}
                                    onChange={(e) => setReligion(e.target.value)}
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

export default AdminProfileScreen
