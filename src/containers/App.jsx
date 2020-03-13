import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NotesList from '../components/notes/NotesList';
import NotesDetail from '../components/notes/NoteDetail';

function App(props) {
  App.propTypes = {
    children: PropTypes.object
  };

  return (
    <Router>
      <Route path={'/'} component={NotesList} />
      <Route path={'/notes/:id'} component={NotesDetail} />
    </Router>
  );
}

export default App;
