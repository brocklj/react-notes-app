import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchNotesIfNeeded, removeNote } from '../../actions/NoteActions';

import EditForm from './EditForm';
import { FormattedMessage } from 'react-intl';

const Title = styled(Modal.Title)`
  width: 100%;
`;

function NotesDetail(props) {
  NotesDetail.propTypes = {
    dispatch: Proptypes.func.isRequired
  };
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
        <Title className={'modal-title-full-width'}>
          {isFetching || !note ? (
            '...processing'
          ) : (
            <>
              <EditForm id={note.id} title={note.title} />
            </>
          )}
        </Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="danger" onClick={handleRemoveNote}>
          <FormattedMessage id={'remove'} />
        </Button>
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
