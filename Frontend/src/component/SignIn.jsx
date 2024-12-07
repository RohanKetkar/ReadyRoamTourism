import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Router } from '../Route/Route';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    // console.log('Remember Me:', rememberMe);
    setEmail('');
    setPassword('');
    navigate("/tourism");
    // setRememberMe(false);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={8} lg={6} xl={5} className="mx-auto">
          <Card className="shadow-sm border-0" style={{ borderRadius: '0.75rem' }}>
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 fw-bold text-indigo-600">Sign In</h2>

              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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

                {/* <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <a href="#" className="text-decoration-none">Forgot password?</a>
                </div> */}
                
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100 mb-3 bg-button"
                    type="submit"
                 
                  >
                    Login
                  </Button>
              
                <div className="text-center mb-3">
                  <Link to={Router.SIGNUP}>
                    {/* <p className="text-muted"> */}
                    Don't have an account? Register
                    {/* </p> */}
                  </Link>
                </div>

                <div className="d-flex flex-column gap-2">
                  <Button
                    variant="outline-danger"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaGoogle className="me-2" />
                    Sign in with Google
                  </Button>

                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaLinkedin className="me-2" />
                    Sign in with LinkedIn
                  </Button>
                  <Button
                    variant="outline-dark"
                    size="lg"
                    className="w-100 d-flex align-items-center justify-content-center"
                  >
                    <FaGithub className="me-2" />
                    Sign in with GitHub
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

export default SignIn;

