import React from 'react';
import { NotesList } from './NotesList';
import DefaultLayout from './layouts/DefaultLayout';

const App = () => {
  return (
    <DefaultLayout>
      <NotesList />
    </DefaultLayout>
  );
};

export default App;
