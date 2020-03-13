import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Form } from 'react-bootstrap';
import { ADD_NOTE, addNote } from '../../actions';

function NoteAdd(props) {
  const { dispatch } = props;

  const [newValue, setNewValue] = useState('');
  const [clicked, setClicked] = useState(false);

  function onSubmit() {
    if (!newValue) {
      setClicked(false);
      return;
    }
    dispatch(addNote({ title: newValue }));
    setNewValue('');
  }
  return (
    <ListGroup.Item onClick={() => setClicked(true)}>
      {clicked ? (
        <Form.Control
          size="sm"
          type="text"
          placeholder="+ Add note"
          onBlur={onSubmit}
          onKeyPress={e => (e.charCode === 13 ? onSubmit() : null)}
          value={newValue}
          onChange={e => setNewValue(e.target.value)}
          autoFocus={true}
        ></Form.Control>
      ) : (
        '+ Add note'
      )}
    </ListGroup.Item>
  );
}

const mapStateToProps = state => {
  const { NotesReducer } = state;
  const { notes, isFetching } = NotesReducer;

  return {
    notes,
    isFetching
  };
};

export default connect(mapStateToProps)(NoteAdd);
