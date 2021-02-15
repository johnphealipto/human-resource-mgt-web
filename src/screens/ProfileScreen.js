import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { createProfile, getProfileDetails, updateProfile } from '../actions/profileActions'
import { PROFILE_CREATE_RESET, PROFILE_DETAILS_RESET, PROFILE_UPDATE_RESET } from '../constants/profileConstants'
import FixedNavbar from '../components/FixedNavbar';
import Header from '../components/Header';
import '../styles/ProfileScreen.css';

const ProfileScreen = ({ history }) => {
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

    //const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const profileDetails = useSelector(state => state.profileDetails)
    const { loading, profile } = profileDetails

    const profileUpdate = useSelector(state => state.profileUpdate)
    const {  error:errorUpdate, success:successUpdate } = profileUpdate

    const profileCreate = useSelector(state => state.profileCreate)
    const { error:errorCreate, success:successCreate } = profileCreate

  

    useEffect(() => {

        if(!userInfo) {
            history.push('/')
        } else {
            if(successUpdate || successCreate) {
                dispatch({
                    type: PROFILE_UPDATE_RESET
                })
                dispatch({
                    type: PROFILE_CREATE_RESET
                })
                dispatch({
                    type: PROFILE_DETAILS_RESET
                })
                history.push('/')
            } else {
            if(!profile || !profile.dob) {
                dispatch(getProfileDetails('me'))
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
    }
    }, [dispatch, history, profile, successUpdate, successCreate, userInfo])

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
        //Create Actions
        dispatch(createProfile({
          
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
         
        <Row className='ml-4 mr-4 py-4 profilescreen-wrapper'>
        <Col md={3}>
            <FixedNavbar />
        </Col>

        <Col md={8}>
            <Header />
                <h1>My Profile</h1>
               
                {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
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
                                value={dob.substring(0, 10)}
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

export default ProfileScreen
