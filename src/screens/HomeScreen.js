import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Table, Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'
import '../styles/ProfileScreen.css';
import Header from '../components/Header';
import FixedNavbar from '../components/FixedNavbar';

const HomeScreen = ({ history }) => {
   

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDetails = useSelector(state => state.userDetails)
    const { user } = userDetails

    useEffect(() => {

        if(!userInfo) {
            history.push('/')
        } else {
            dispatch(getUserDetails('me'))
        }
    }, [dispatch, history, user, userInfo])

  return (
    <>   
      <Row className='ml-4 mr-4 py-4 profilescreen-wrapper'>
        <Col md={3}>
          <FixedNavbar />
        </Col>
        <Col md={8}>
          <Header />
          <h1 className='page-header'>Home</h1>
          <Form key={user._id}>
                <Form.Row>
                  <Form.Group  as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    	type="text"
                    	placeholder={user.firstname}
                        readOnly
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control 
                      type="text"
                      placeholder={user.middlename}
                      readOnly
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group  as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    	type="text"
                    	placeholder={user.lastname}
                        readOnly
                    ></Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group  as={Col}>
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control 
                      type="text"
                      placeholder={user.employeeCode}
                    ></Form.Control>
                	</Form.Group>
                	<Form.Group  as={Col}>
                    <Form.Label>Department</Form.Label>
                    <Form.Control 
                      type="text"
                      placeholder={user.department}
                    ></Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group  as={Col}>
                    <Form.Label>Role</Form.Label>
                    <Form.Control 
                      type="text"
                      placeholder={user.role}
                    ></Form.Control>
                	</Form.Group>
                	<Form.Group  as={Col}>
                    <Form.Label>Mail Addresss</Form.Label>
                    <Form.Control 
                      type="text"
                      placeholder={user.email}
                    ></Form.Control>
                  </Form.Group>
                </Form.Row>
                {userInfo && (
                <Link to='/dashboard'>
                    <Button type='submit' variant='primary' className='btn-block'>
                        <i className='fas fa-edit'></i> Edit
                    </Button>
                </Link>
                )}
              </Form>

        {/* <Table striped bordered hover className='table-sm mr-4 ml-3 home-table'>
          <thead>
            <tr>
                    <th>EMPLOYEE ID</th>
                    <th>FIRST NAME</th>
                    <th>MIDDLE NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>DEPARTMENT</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                
                <tr key={user._id}>
                    <td>{user.employeeCode}</td>
                    <td>{user.firstname}</td>
                    <td>{user.middlename}</td>
                    <td>{user.lastname}</td>
                    <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                    <td>{user.role}</td>
                    <td>{user.department}</td>
                    {userInfo && (
                    <td>
                        <Link to='/dashboard'>
                            <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                            </Button>
                        </Link>
                        
                    </td>
                    )}
                </tr>
                
            </tbody>
        </Table> */}
        </Col>
        </Row>
        </>
    )
}

export default HomeScreen;