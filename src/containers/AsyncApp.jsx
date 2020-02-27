import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchNotesIfNeeded } from '../actions';

import NotesList from '../components/notes/NotesList';

function App(props) {
  App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.object,
    notes: PropTypes.any
  };
  const { notes, dispatch } = props;

  useEffect(() => {
    dispatch(fetchNotesIfNeeded());
  }, []);

  return <>{notes ? <NotesList notes={notes} /> : 'Loading...'}</>;
}

const mapStateToProps = state => {
  const { NotesReducer } = state;
  const { notes } = NotesReducer;

  return {
    notes
  };
};

export default connect(mapStateToProps)(App);
