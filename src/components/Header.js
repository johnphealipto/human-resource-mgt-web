import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../img/outcess-logo-new.png'
import { Navbar, Nav } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = ({ history }) => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {  userInfo } = userLogin


    const logoutHandler = () => {
        dispatch(logout())
        
    }

    

    return (
        <header>
            <Navbar variant='light' expand="lg"  collapseOnSelect>
                
                    <LinkContainer to='/'>
                        <Navbar.Brand id="logo-anchor">
                        <img id ="nav-bar-logo"src={Logo} alt="Outcess Logo" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav className='logout'>
                        
                        {userInfo ? (
                            <>
                            
                            
                            {/* <Nav.Link>{userInfo.role}</Nav.Link> */}
                            
                            {/* <LinkContainer to='/dashboard'>
                            <Nav.Link>{userInfo.email}</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to='/'>
                            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                            </LinkContainer>
                            
                            
                        
                            </>
                        ) : (
                            <LinkContainer to='/'>
                                <Nav.Link><i className='fas fa-user'></i> Forgot password</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
