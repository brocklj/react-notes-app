import React, { useState } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { editNote } from '../../actions';

const EditForm = connect()(function({ id, title, dispatch, setEdit }) {
  const [value, setValue] = useState(title);

  function onChange(event) {
    const { target } = event;
    setValue(target.value);
  }

  function submit() {
    dispatch(editNote({ id, title: value }));
    setEdit(false);
  }
  return (
    <Form.Control
      type={'text'}
      autoFocus={true}
      value={value}
      onChange={onChange}
      onBlur={submit}
      onKeyPress={e => (e.charCode === 13 ? submit() : null)}
    />
  );
});
EditForm.propTypes = {
  id: Proptypes.number,
  title: Proptypes.any,
  dispatch: Proptypes.func.isRequired
};

function Note({ id, title }) {
  const [edit, setEdit] = useState(false);

  return (
    <ListGroup.Item
      onDoubleClick={() => setEdit(true)}
      onBlur={() => setEdit(false)}
    >
      {edit ? <EditForm id={id} title={title} setEdit={setEdit} /> : title}
    </ListGroup.Item>
  );
}

Note.propTypes = {
  children: Proptypes.any,
  title: Proptypes.any,
  id: Proptypes.number
};

export default Note;
