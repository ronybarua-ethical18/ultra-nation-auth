import React from 'react';
import { Button, Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="home" ><b className="title">Ultra Nation</b></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/home" className="link">Home</Link>
                    <Link className="mr-3 ml-3 link" to="/login">Login</Link>
                    <Link to="/country" className="link">Country Secret</Link>
                </Nav>
            </Navbar>

            {/* jumbotron */}
            <Jumbotron className="text-left bg-white shadow">
                <h1>Hello, Ultra Nations</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.</p>
                <p>
                    <Button id="main-button">Explore the world</Button>
                </p>
            </Jumbotron>
        </Container>
    );
};

export default Header;