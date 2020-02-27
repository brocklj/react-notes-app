import React from 'react';
import Proptypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

function Note({ children }) {
  return <ListGroup.Item>{children}</ListGroup.Item>;
}

Note.propTypes = { children: Proptypes.any };

export default Note;
