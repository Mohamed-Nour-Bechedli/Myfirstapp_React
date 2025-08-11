import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';

function App() {
    return (
        <>
            <div className="App">
                {/* Navbar */}
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">My React-Bootstrap App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* Heading */}
                <Container className="mt-4">
                    <h1 className="text-center">Welcome to My App</h1>

                    {/* Cards */}
                    <Row className="mt-4">
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661873673782-88b30e6abef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <Card.Body>
                                    <Card.Title>Tokyo</Card.Title>
                                    <Card.Text>
                                        This is a short description for the first card.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1708768618003-bf4009f43ddc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <Card.Body>
                                    <Card.Title>Time Square</Card.Title>
                                    <Card.Text>
                                        This is a short description for the second card.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1556901600-3e1be0aa443e?q=80&w=1352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <Card.Body>
                                    <Card.Title>Sidi Bousaid</Card.Title>
                                    <Card.Text>
                                        This is a short description for the third card.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
