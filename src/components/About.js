import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section py-5" id="about">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="about-title">{t('about.title')}</h2>
            <p className="about-description mt-4">{t('about.description')}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
