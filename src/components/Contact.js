import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.alert'));
  };

  return (
    <section id="contact">
      <Container className="py-5">
        <h2>{t('contact.title')}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>{t('contact.name')}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t('contact.namePlaceholder')}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{t('contact.email')}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t('contact.emailPlaceholder')}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>{t('contact.message')}</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder={t('contact.messagePlaceholder')}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {t('contact.submit')}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
