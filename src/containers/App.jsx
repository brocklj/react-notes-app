import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import messages from '../intl/messages';
import NoteList from '../components/notes/NoteList';
import NoteDetail from '../components/notes/NoteDetail';

function App(props) {
  App.propTypes = {
    children: PropTypes.object,
    locale: PropTypes.any
  };
  const { locale } = props;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <Route path={'/'} component={NoteList} />
        <Route path={'/notes/:id'} component={NoteDetail} />
      </Router>
    </IntlProvider>
  );
}

function mapStateToProps(state) {
  const { LangReducer } = state;
  return { locale: LangReducer.locale };
}

export default connect(mapStateToProps)(App);
