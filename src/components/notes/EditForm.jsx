import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Proptypes from 'prop-types';
import { Form, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';

import { editNote } from '../../actions/NoteActions';

const EditForm = connect()(function({ id, title, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);

  function onChange(event) {
    const { target } = event;
    setValue(target.value);
  }

  function submit() {
    dispatch(editNote({ id, title: value }));
    setIsEditing(false);
  }
  return (
    <span onClick={() => setIsEditing(true)} onBlur={() => setIsEditing(false)}>
      {isEditing ? (
        <InputGroup size="lg">
          <Form.Control
            type={'text'}
            autoFocus={true}
            value={value}
            onChange={onChange}
            onBlur={submit}
            onKeyPress={e => (e.charCode === 13 ? submit() : null)}
          />
        </InputGroup>
      ) : (
        <OverlayTrigger
          key={'right'}
          placement={'right'}
          overlay={
            <Tooltip id={`tooltip-right`}>
              {' '}
              <FormattedMessage id={'clickToEdit'} />
            </Tooltip>
          }
        >
          <span>{title}</span>
        </OverlayTrigger>
      )}
    </span>
  );
});
EditForm.propTypes = {
  id: Proptypes.number,
  title: Proptypes.any,
  dispatch: Proptypes.func.isRequired
};

export default EditForm;
