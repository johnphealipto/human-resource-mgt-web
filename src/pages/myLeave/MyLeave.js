import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import './MyLeave.css';
import '../../components/fixedNavbar/FixedNavbar.css';

const MyLeave = () => {
  return (
    <div className='myleave-wrapper'>

      <Row>
        <Col sm="3">
          <div className="fixednavbar-wrapper">
            <div className='employee-details'>
              <p>Employee</p>
              <p>user@example.com</p>
            </div>

            <Nav defaultActiveKey="#" className="flex-column">
              <NavLink to='/home-page' className="nav-link">
                <i class="fas fa-home pr-3"></i>
                Home
              </NavLink>
              <NavLink to='/my-leave' className="nav-link active-here">
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
          <Container className='myleave-col'>
            <h4>My Leave Application</h4>
            <div className='myleave-details text-center'>
              <p>You are not qualified for leave</p>
              <p>12 days remaining</p>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default MyLeave;