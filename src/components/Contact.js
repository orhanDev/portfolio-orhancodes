import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <p className="text-center mb-4">
          Feel free to connect with me on social media or send an email!
        </p>
        <Row className="justify-content-center">
          <Col xs="auto">
            <div
              className="d-flex justify-content-center gap-4"
              style={{ zIndex: 10, position: 'relative' }}
            >
              <a
                href="https://www.linkedin.com/in/orhan-yilmaz-codes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ padding: '0.5rem' }}
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/orhan-yilmaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ padding: '0.5rem' }}
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://orhandev.github.io/redirect-instagram/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ padding: '0.5rem' }}
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
