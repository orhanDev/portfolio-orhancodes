import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <Container className="text-center my-4">
      <h5>Follow Me</h5>
      <div style={{ fontSize: '1.8rem' }}>
        <a
          href="https://www.instagram.com/orhancodes/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-dark"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/orhan-yilmaz-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-dark"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/orhan-yilmaz"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-dark"
        >
          <FaGithub />
        </a>
      </div>
    </Container>
  );
};

export default SocialLinks;
