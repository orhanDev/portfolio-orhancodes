import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col md="auto" className="d-flex gap-4">
            <a
              href="https://www.linkedin.com/in/orhan-yilmaz-codes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-dark fs-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/orhan-yilmaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-dark fs-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/orhancodes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-dark fs-4"
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
