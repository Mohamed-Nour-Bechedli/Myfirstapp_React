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
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card One</Card.Title>
                                    <Card.Text>
                                        This is a short description for the first card.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card Two</Card.Title>
                                    <Card.Text>
                                        This is a short description for the second card.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card Three</Card.Title>
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
