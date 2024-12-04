import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';


import { Router } from '../Route/Route';
import { Link } from 'react-router-dom';
function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    setErrorMessage('');
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={8} lg={6} xl={5} className="mx-auto">
          <Card className="shadow-sm border-0" style={{ borderRadius: '0.75rem' }}>
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 fw-bold text-indigo-600">Sign Up</h2>

              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your first name" 
                    size="lg"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your last name" 
                    size="lg"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter your password" 
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-100 mb-3 bg-button"
                  type="submit"
                >
                  Sign Up
                </Button>
                
                <div className="text-center mb-3">
                <Link to={Router.SIGNIN}>
                  <p className="text-muted">
                    Already have an account? <a href="/login" className="text-primary">Login</a>
                  </p>
                  </Link>
                </div>

                <div className="d-flex flex-column gap-2">
                  <Button
                    variant="outline-danger"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaGoogle className="me-2" />
                    Sign up with Google
                  </Button>

                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaLinkedin className="me-2" />
                    Sign up with LinkedIn
                  </Button>
                  
                  <Button
                    variant="outline-dark"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaGithub className="me-2" />
                    Sign up with GitHub
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
