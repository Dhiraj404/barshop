import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'
import image from '../img/DB.png'
import './header.css'


const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <header>

            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/">

                        <Navbar.Brand >
                            <img src={image} alt="sorry" className="alo" />
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  >

                        <Route render={({ history }) => <SearchBox history={history} />} />

                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>Cart <i className='fas fa-shopping-cart'></i> </Nav.Link>
                            </LinkContainer>



                            {userInfo ? (

                                <NavDropdown title={userInfo.name} id='username'>

                                    <LinkContainer to='/profile'>

                                        <NavDropdown.Item>Profile</NavDropdown.Item>


                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>

                                </NavDropdown>

                            ) :


                                <LinkContainer to="/login">

                                    <Nav.Link className="mx-3">Sign-In <i className='fas fa-user'></i></Nav.Link>
                                </LinkContainer>

                            }


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
