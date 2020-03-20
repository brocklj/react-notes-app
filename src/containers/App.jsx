import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NoteList from '../components/notes/NoteList';
import NoteDetail from '../components/notes/NoteDetail';

function App(props) {
  App.propTypes = {
    children: PropTypes.object
  };

  return (
    <Router>
      <Route path={'/'} component={NoteList} />
      <Route path={'/notes/:id'} component={NoteDetail} />
    </Router>
  );
}

export default App;
