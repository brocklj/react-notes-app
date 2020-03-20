import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { changeLang } from '../../actions/LangActions';

function Locale({ locale, dispatch }) {
  return (
    <DropdownButton alignRight title={locale} id="dropdown-menu-align-right">
      <Dropdown.Item eventKey="1" onClick={() => dispatch(changeLang('cs'))}>
        CS
      </Dropdown.Item>
      <Dropdown.Item eventKey="2" onClick={() => dispatch(changeLang('en'))}>
        EN
      </Dropdown.Item>
    </DropdownButton>
  );
}

function mapStateToProps(state) {
  const { LangReducer } = state;

  return {
    locale: LangReducer.locale
  };
}

export default connect(mapStateToProps)(Locale);
