import React from 'react';
import { Form, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './Education.css';

const Education = () => {
  return (
    <div className="education-wrapper">
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Discipline
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Mathematics Education" readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Institution
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="University of Nigeria, Nsukka" readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Year
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" placeholder="2013" readOnly />
          </Col>
          <Col sm="5">
            <Form.Control type="text" placeholder="2017" readOnly />
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

export default Education;