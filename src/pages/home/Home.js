import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import './Home.css';
import '../../components/fixedNavbar/FixedNavbar.css';
import Profile from '../../components/profile/Profile';
import Education from '../../components/education/Education';

const HomePage = () => {
  return (
    <div className='homepage-wrapper'>

      <Row>
        <Col sm="3">
          <div className="fixednavbar-wrapper">
            <div className='employee-details'>
              <p>Employee</p>
              <p>user@example.com</p>
            </div>

            <Nav defaultActiveKey="#" className="flex-column">
              <NavLink to='/home-page' className="nav-link active-here">
                <i class="fas fa-home pr-3"></i>
                Home
              </NavLink>
              <NavLink to='/my-leave' className="nav-link">
                <i class="fas fa-sign-out-alt pr-3"></i>
                My Leave
              </NavLink>
              <NavLink to='/dashboard' className="nav-link">
                <i class="fas fa-cog pr-3"></i>
                Settings
              </NavLink>
              <NavLink to='/dashboard' className="nav-link">
                <i class="fas fa-info-circle pr-3"></i>
                Support
              </NavLink>

              <div className='admin-section'>
                <p>Admin Section</p>
              </div>
              <NavLink to='/dashboard' className="nav-link">
                <i class="fas fa-info-circle pr-3"></i>
                Leave Applications
              </NavLink>
              <NavLink to='/dashboard' className="nav-link">
                <i class="fas fa-info-circle pr-3"></i>
                All Employees
              </NavLink>
              <NavLink to='/dashboard' className="nav-link">
                <i class="fas fa-info-circle pr-3"></i>
                Create Employee
              </NavLink>
            </Nav>
          </div>
        </Col>

        <Col sm="6">
          <Container className='homepage-col'>
            <h4>My Profile</h4>
            <Tabs justify defaultActiveKey="profile" id="nonanim-tab-example">
              <Tab eventKey="profile" title="Profile">
                <Profile />
              </Tab>
              <Tab eventKey="education" title="Education">
                <Education />
              </Tab>
              <Tab eventKey="nextOfKin" title="Next of Kin">
                here
              </Tab>
              <Tab eventKey="otherInfo" title="Other Info">
                here
              </Tab>
            </Tabs>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;