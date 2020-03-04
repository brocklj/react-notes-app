import axios from '../utils/axios';

export const INVALIDATE_NOTES = 'INVALIDATE_NOTES';
export const REQUEST_NOTES = 'REQUEST_NOTES';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export function invalidateNotes() {
  return {
    type: INVALIDATE_NOTES
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    newNote: note
  };
}

export function editNote(note) {
  return {
    type: EDIT_NOTE,
    note: note
  };
}

const requestNotes = () => ({
  type: REQUEST_NOTES
});

const receiveNotes = json => ({
  type: RECEIVE_NOTES,
  notes: json.data,
  receivedAt: Date.now()
});

/* Get Notes */
async function getNotes(id = '') {
  if (id) {
    return await axios.get(`/notes/${id}`);
  }
  return await axios.get(`/notes`);
}

async function putNotes(id, data) {
  return await axios.put(`/notes/${id}`, data);
}

function fetchNotes() {
  return async dispatch => {
    dispatch(requestNotes());
    const json = await getNotes();
    console.log(json);
    dispatch(receiveNotes(json));
  };
}

function shouldFetchNotes(state) {
  const { notes } = state;
  if (!notes) {
    return true;
  } else if (notes.isFetching) {
    return false;
  } else {
    return notes.didInvalidate;
  }
}

export function fetchNotesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNotes(getState())) {
      return dispatch(fetchNotes());
    }
  };
}
