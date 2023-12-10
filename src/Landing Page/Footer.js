import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6} className='mt-5'>
            <h5>Footer Section 1</h5>
            <p>Content for the first section of the footer.</p>
          </Col>
          <Col md={6} className='mt-5'>
            <h5>Footer Section 2</h5>
            <p>Content for the second section of the footer.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <p>&copy; {new Date().getFullYear()} Your Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
