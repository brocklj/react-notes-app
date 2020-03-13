import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Proptypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

function Note({ id, title }) {
  const history = useHistory();

  const handleNoteDetail = () => {
    setTimeout(() => {
      return history.push(`/notes/${id}`);
    }, 500);
  };

  return (
    <ListGroup.Item style={{ cursor: 'pointer' }} onClick={handleNoteDetail}>
      {title}
    </ListGroup.Item>
  );
}

Note.propTypes = {
  children: Proptypes.any,
  title: Proptypes.any,
  id: Proptypes.number
};

export default Note;
