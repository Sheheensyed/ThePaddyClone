import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" expand="lg" fixed='top'>
            <Navbar.Brand href="/">
               <Link to={'/'}>
                    <img
                        src="https://thepaddyfestival.com/wp-content/uploads/2024/10/%E0%B4%A8%E0%B4%BF%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%B3%E0%B5%81%E0%B4%9F%E0%B5%86-%E0%B4%B8%E0%B5%8D%E0%B4%B5%E0%B4%AA%E0%B5%8D%E0%B4%A8-%E0%B4%AD%E0%B4%B5%E0%B4%A8%E0%B4%82-5-1-e1730233815536-2048x1078.png"
                        width="100" height="50" className="d-inline-block align-top ms-5" alt="Logo"
                    />
               </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto me-5 px-2">

                    <Nav.Link>  <Link to={'/'} style={{ textDecoration: 'none' }}><p className='text-light'>HOME</p></Link></Nav.Link>

                    <Nav.Link> <Link to={'/contact'} style={{ textDecoration: 'none' }}><p className='text-light'>CONTACT US</p></Link></Nav.Link>

                    <Nav.Link><Link to={'/about'} style={{ textDecoration: 'none' }}><p className='text-light'>ABOUT US</p></Link></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
