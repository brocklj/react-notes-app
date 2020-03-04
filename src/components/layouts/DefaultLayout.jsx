import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function DefaultLayout(props) {
  const { children } = props;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{process.env.APP_NAME}</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>{children}</Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.object
};

export default DefaultLayout;
