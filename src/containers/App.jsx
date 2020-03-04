import React from 'react';
import PropTypes from 'prop-types';

import NotesList from '../components/notes/NotesList';

function App(props) {
  App.propTypes = {
    children: PropTypes.object
  };

  return (
    <>
      <NotesList />
    </>
  );
}

export default App;
