import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchNotesIfNeeded, removeNote } from '../../actions';

import EditForm from './EditForm';

function NotesDetail(props) {
  const { dispatch, isFetching } = props;
  const [note, setNote] = useState(null);
  const history = useHistory();
  const params = useParams();
  const { id } = params;

  const fetchtchNoteDetailData = async () => {
    const action = await dispatch(fetchNotesIfNeeded(id));
    setNote(action.note);
  };
  useEffect(() => {
    fetchtchNoteDetailData();
  }, [dispatch]);

  const onHide = () => {
    return history.push(`/`);
  };

  const handleRemoveNote = async () => {
    await dispatch(removeNote(note));
    return onHide();
  };
  console.log(note);
  return (
    <Modal show={true} onHide={onHide}>
      {' '}
      <Modal.Header closeButton={true}>
        <Modal.Title>
          {isFetching || !note ? (
            '..loading'
          ) : (
            <>
              <EditForm id={note.id} title={note.title} />
            </>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!note ? (
          '..loading'
        ) : (
          <Button variant="danger" onClick={handleRemoveNote}>
            Remove
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
}

function mapStateToProps(state) {
  const { NotesReducer } = state;
  const { isFetching } = NotesReducer;

  return {
    isFetching
  };
}

export default connect(mapStateToProps)(NotesDetail);
