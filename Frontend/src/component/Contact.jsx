
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
function Contact() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={5}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4 text-indigo" >
                <h1>Contact Us</h1>
              </Card.Title>
              <Card.Text className="text-center mb-4">
                Contact us for any query.
              </Card.Text>
              <Form>
                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="formName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </Form.Group>
                  </Col>
                  </Row>
                  <Row>
                  <Col md={12}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </Col>
                 
                </Row>
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the subject"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message here"
                  />
                </Form.Group>
                <div className="text-center ">
                  <Button  type="submit" className="bg-button">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;