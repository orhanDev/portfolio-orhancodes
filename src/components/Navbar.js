import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MyNavbar = ({ onLanguageChange }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false); // Menü açık mı?

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">Orhan YILMAZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={() => setExpanded(false)}>
            <Nav.Link href="#about">{t('navbar.about')}</Nav.Link>
            <Nav.Link href="#projects">{t('navbar.projects')}</Nav.Link>
            <Nav.Link href="#contact">{t('navbar.contact')}</Nav.Link>
          </Nav>
          <div>
            <Button variant="outline-light" size="sm" onClick={() => onLanguageChange('de')}>DE</Button>{' '}
            <Button variant="outline-light" size="sm" onClick={() => onLanguageChange('en')}>EN</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
