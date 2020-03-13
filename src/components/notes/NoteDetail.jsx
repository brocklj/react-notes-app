import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchNotesIfNeeded } from '../../actions';

import EditForm from './EditForm';

function NotesDetail(props) {
  const { dispatch } = props;
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
  if (!note) {
    return false;
  }
  return (
    <Modal show={!!note} onHide={onHide}>
      <Modal.Header closeButton={true}>
        <Modal.Title>
          <EditForm id={note.id} title={note.title} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Delete</Modal.Body>
    </Modal>
  );
}

export default connect()(NotesDetail);
