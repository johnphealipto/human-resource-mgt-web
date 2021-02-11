import React from 'react';
import { Form, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" placeholder="John" readOnly />
          </Col>
          <Col sm="5">
            <Form.Control type="text" placeholder="Adibe" readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Staff ID
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="OUT/ADM/005" readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="user@example.com" readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Department
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Software Developer (IT)" readOnly />
          </Col>
        </Form.Group>
        <LinkContainer to='#'>
          <Nav.Link className='text-right edit' column sm="12">
            <i class="fas fa-pencil-alt pr-1"></i>
            Edit
          </Nav.Link>
        </LinkContainer>
      </Form>
    </div>
  );
}

export default Profile;