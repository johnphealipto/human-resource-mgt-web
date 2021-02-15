import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Table, Button, Row, Col, ListGroup, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { EDUCATION_CREATE_EMPLOYEE_RESET, EDUCATION_CREATE_RESET, EDUCATION_DETAILS_EMPLOYEE_RESET, EDUCATION_UPDATE_RESET } from '../constants/educationConstants'
import { createEducation, createEducationEmpId, getEducationDetailsEmpId, updateEducation } from '../actions/educationActions'


const AdminEducationScreen = ({ history, match }) => {
    const userId = match.params.id

    const [institutionAttended, setInstitutionAttended] = useState('')
    const [courseOfStudy, setCourseOfStudy] = useState('')
    const [yearOfGraduation, setYearOfGraduation] = useState('')
    const [professionalMembership, setProfessionalMembership] = useState('')

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const educationDetailsEmpId = useSelector(state => state.educationDetailsEmpId)
    const { loading, error, education } = educationDetailsEmpId

    const educationUpdate = useSelector(state => state.educationUpdate)
    const { success:successUpdate } = educationUpdate

    const educationCreateEmpId = useSelector(state => state.educationCreateEmpId)
    const { success:successCreate } = educationCreateEmpId
    
  

    useEffect(() => {

        if(userInfo  && (userInfo.role === 'hr' || userInfo.role === 'hr-manager' || userInfo.role === 'admin')) {
            
            if(successUpdate || successCreate) {
                dispatch({
                    type: EDUCATION_UPDATE_RESET
                })
                dispatch({
                    type: EDUCATION_DETAILS_EMPLOYEE_RESET
                })
                dispatch({
                    type: EDUCATION_CREATE_EMPLOYEE_RESET
                })
                history.push('/home')
            } else {
            if(!education || education.employee  !== userId) {
                dispatch(getEducationDetailsEmpId(userId))
            } else {
                setInstitutionAttended(education.institutionAttended)
                setCourseOfStudy(education.courseOfStudy)
                setProfessionalMembership(education.professionalMembership)
                setYearOfGraduation(education.yearOfGraduation)
            }
        }
        } else {
            history.push('/')
    }
    }, [dispatch, history, education, userId, successCreate, successUpdate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateEducation({
            _id: education._id,
            institutionAttended,
            courseOfStudy,
            professionalMembership,
            yearOfGraduation
        }))
       
    }

    const createsubmitHandler= (e) => {
        e.preventDefault()
        dispatch(createEducationEmpId({
            employee: userId,
           institutionAttended,
           courseOfStudy,
           professionalMembership,
           yearOfGraduation
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
                <h1>Education</h1>
               
               
                {successUpdate && <Message variant='success'>Profile Updated</Message>}
                {loading && <Loader />}
                {
                    education ? (
                        <Form onSubmit={submitHandler}>
                        <Form.Row>
                            <Form.Group  as={Col} controlId='institutionAttended'>
                                <Form.Label>Institution Attended</Form.Label>
                                <Form.Control 
                                type='institutionAttended' 
                            
                                placeholder='Enter Institution ATtended'
                                value={institutionAttended}
                                onChange={(e) => setInstitutionAttended(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='courseOfStudy'>
                                <Form.Label>Course Of Study</Form.Label>
                                <Form.Control 
                                type='courseOfStudy' 
                                
                                placeholder='Enter Course Of Study'
                                value={courseOfStudy}
                                onChange={(e) => setCourseOfStudy(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            
                            
                    
                            
                        </Form.Row>
                        <Form.Row>
                            <Form.Group  as={Col} controlId='professionalMembership'>
                                <Form.Label>Professional Membership</Form.Label>
                                <Form.Control 
                                type='professionalMembership' 
                                
                                placeholder='Enter Professional Membership'
                                value={professionalMembership}
                                onChange={(e) => setProfessionalMembership(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='yearOfGraduation'>
                                <Form.Label>Year Of Graduation</Form.Label>
                                <Form.Control 
                                type='date' 
                            
                                placeholder='Enter Year Of Graduation'
                                value={yearOfGraduation}
                                onChange={(e) => setYearOfGraduation(e.target.value)}
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
                            <Form.Group  as={Col} controlId='institutionAttended'>
                                <Form.Label>Institution Attended</Form.Label>
                                <Form.Control 
                                type='institutionAttended' 
                            
                                placeholder='Enter Institution ATtended'
                                value={institutionAttended}
                                onChange={(e) => setInstitutionAttended(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='courseOfStudy'>
                                <Form.Label>Course Of Study</Form.Label>
                                <Form.Control 
                                type='courseOfStudy' 
                                
                                placeholder='Enter Course Of Study'
                                value={courseOfStudy}
                                onChange={(e) => setCourseOfStudy(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            
                            
                    
                            
                        </Form.Row>
                        <Form.Row>
                            <Form.Group  as={Col} controlId='professionalMembership'>
                                <Form.Label>Professional Membership</Form.Label>
                                <Form.Control 
                                type='professionalMembership' 
                                
                                placeholder='Enter Professional Membership'
                                value={professionalMembership}
                                onChange={(e) => setProfessionalMembership(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group  as={Col} controlId='yearOfGraduation'>
                                <Form.Label>Year Of Graduation</Form.Label>
                                <Form.Control 
                                type='date' 
                            
                                placeholder='Enter Year Of Graduation'
                                value={yearOfGraduation}
                                onChange={(e) => setYearOfGraduation(e.target.value)}
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

export default AdminEducationScreen
