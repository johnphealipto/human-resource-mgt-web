import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import FixedNavbar from '../components/FixedNavbar';
import Header from '../components/Header';

const MyLeaveApplicationScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {

        if(!userInfo) {
            history.push('/')
        } 
    }, [dispatch, history, userInfo])

    return (
        <>
            
        <Row className='ml-4 mr-4 py-4'>
        <Col md={3}>
        <FixedNavbar />
        </Col>
        <Col md={8}>
            <Header />
            <h1 className='page-header'>Page Still in Development</h1>
        </Col>
        </Row>
        </>
    )
}

export default MyLeaveApplicationScreen;
