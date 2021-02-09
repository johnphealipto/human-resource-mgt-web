import React from 'react';
import { Nav } from 'react-bootstrap';
// import LoginImg from '../../img/call-center.jpg';
import './FixedNavbar.css';

const FixedNavbar = () => {
  return (
    <div className="fixednavbar-wrapper">
      <div className='staff-details'>
        <p>Employee</p>
        <p>user@example.com</p>
      </div>
      <Nav defaultActiveKey="#" className="flex-column">
        <Nav.Link eventKey="link-1" className="nav-link">
          <i class="fas fa-home pr-3"></i>
          Home
        </Nav.Link>
        <Nav.Link eventKey="link-2" className="nav-link">
        <i class="fas fa-sign-out-alt pr-3"></i>
          My Leave
        </Nav.Link>
        <Nav.Link eventKey="link-3" className="nav-link">
          <i class="fas fa-cog pr-3"></i>
          Settings
        </Nav.Link>
        <Nav.Link eventKey="link-4" className="nav-link">
        <i class="fas fa-info-circle pr-3"></i>
          Support
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default FixedNavbar;