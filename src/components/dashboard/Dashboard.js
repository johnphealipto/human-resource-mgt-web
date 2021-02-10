import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import FixedNavbar from '../fixedNavbar/FixedNavbar';
import Profile from '../profile/Profile';
import Education from '../education/Education'
import './Dashboard.css';

const DashboardPage = () => {
  return (
    <div className='dashboard-wrapper'>
      <Row>
        <Col className='fixednavbar-col'>
          <FixedNavbar />
        </Col>
        <Col>
          <Container className='dashboard-col'>
            <Profile />
            <Education />
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardPage;