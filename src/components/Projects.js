import React from 'react';
import './Projects.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projectList = t('projects.list', { returnObjects: true });

  return (
    <section id="projects">
      <Container className="py-5">
        <h2>{t('projects.title')}</h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.link && (
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.view')}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
