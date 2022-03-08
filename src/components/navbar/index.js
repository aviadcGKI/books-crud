import React from 'react'

import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap';

function Navabr() {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand >Books Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <NavDropdown title="Authors" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/createAuthor">Create Author</NavDropdown.Item>
                <NavDropdown.Item href="/authors">Authors list</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav> */}
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Navabr