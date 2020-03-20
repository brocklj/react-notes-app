import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import Locale from '../locale/Locale';

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

function DefaultLayout(props) {
  const { children } = props;
  return (
    <>
      <Navbar
        bg={'dark'}
        variant={'dark'}
        expand={'lg'}
        className={'justify-content-between'}
      >
        <Navbar.Brand>{process.env.APP_NAME}</Navbar.Brand>

        <Locale />
      </Navbar>
      <StyledContainer>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>{children}</Col>
          <Col md={2}></Col>
        </Row>
      </StyledContainer>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.object
};

export default DefaultLayout;
