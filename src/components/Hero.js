import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section text-white">
      <Container>
        <Row className="align-items-center py-5">
          <Col md={7}>
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
          </Col>
          <Col md={5} className="text-center">
            <img
              src="https://via.placeholder.com/300x300.png?text=Orhan+YILMAZ"
              alt="Orhan YILMAZ"
              className="hero-image rounded-circle"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
