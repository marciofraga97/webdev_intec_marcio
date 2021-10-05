import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { AiFillAliwangwang } from "react-icons/ai";

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><AiFillAliwangwang/>RandomForum</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Latest Posts</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Nav.Link href="#pricing">Sign-in</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation
