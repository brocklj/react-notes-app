import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Note from './Note';

function NotesList(props) {
  NotesList.propTypes = {
    notes: PropTypes.array.isRequired
  };
  const { notes } = props;

  return (
    <ListGroup>
      {notes.map((note, i) => (
        <Note key={i}>{note.title}</Note>
      ))}
    </ListGroup>
  );
}

export default NotesList;
