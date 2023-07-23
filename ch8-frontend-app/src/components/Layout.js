import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='layout'>
            {/* navbar */}

            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>

                        <Nav>
                            {/* navbar home/Dashboard */}
                            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                            {/* navbar games list */}
                            <Nav.Link href="/Games" >Games List</Nav.Link>
                        </Nav>
                        <Nav className="me-4">
                            <Nav.Link href="/signup">Signup</Nav.Link>
                            <Nav.Link href='/login' >Login</Nav.Link>

                        </Nav>
                    </Container>
                </Navbar>

            </div>
           


            <div>

                <Outlet />
            </div>

        </div>
        // navbar


    )

}

export default Layout