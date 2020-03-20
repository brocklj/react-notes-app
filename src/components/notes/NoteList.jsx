import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import { fetchNotesIfNeeded } from '../../actions';

import DefaultLayout from '../layouts/DefaultLayout';
import Note from './Note';
import NoteAdd from './NoteAdd';

function NotesList(props) {
  NotesList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object,
    notes: PropTypes.array,
    isFetching: PropTypes.bool
  };
  const { notes, isFetching, dispatch } = props;

  useEffect(() => {
    dispatch(fetchNotesIfNeeded());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <ListGroup>
        {isFetching && notes.length == 0
          ? 'Loading...'
          : notes.map((note, i) => (
              <Note key={i} id={note.id} title={note.title} />
            ))}
        <NoteAdd />
      </ListGroup>
    </DefaultLayout>
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

export default connect(mapStateToProps)(NotesList);
