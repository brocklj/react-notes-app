import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

function DefaultLayout(props) {
  const { children } = props;
  return (
    <Container>
      <Row>App example</Row>
      <Row>
        <Col>React Notes</Col>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.object
};

export default DefaultLayout;
