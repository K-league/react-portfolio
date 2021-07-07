import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class Navigation extends Component {
    render(){
        return (
            <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Full Stack Developer</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        )
    }
}
export default Navigation;