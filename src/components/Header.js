import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>GSI Bioinformatics</Navbar.Brand>
          
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/home-page">
              <Nav.Link>Summary</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/analysis-page">
              <Nav.Link>Analysis</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/files-page">
              <Nav.Link>Files</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
};

export default Header;