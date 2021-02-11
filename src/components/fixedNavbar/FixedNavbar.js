import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './FixedNavbar.css';

const FixedNavbar = () => {
  return (
    <div className="fixednavbar-wrapper">
      <div className='staff-details'>
        <p>Employee</p>
        <p>user@example.com</p>
      </div>

      <Nav defaultActiveKey="#" className="flex-column">
        <NavLink to='/dashboard' className="nav-link active-here">
          <i class="fas fa-home pr-3"></i>
          Home
        </NavLink>
        <NavLink to='/dashboard' className="nav-link">
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
  );
}

export default FixedNavbar;