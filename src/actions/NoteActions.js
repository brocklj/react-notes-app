import axios from '../utils/axios';

export const INVALIDATE_NOTES = 'INVALIDATE_NOTES';
export const REQUEST_NOTES = 'REQUEST_NOTES';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const REQUEST_NOTES_CREATE = 'REQUEST_NOTES_CREATE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const REQUEST_NOTE_UPDATE = 'REQUEST_NOTE_UPDATE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REQUEST_NOTE_DELETE = 'REQUEST_NOTE_DELETE';
export const RECEIVE_NOTE_DELETE = 'RECEIVE_NOTE_DELETE';

export function invalidateNotes() {
  return {
    type: INVALIDATE_NOTES
  };
}

function requestCreateNote(note) {
  return {
    type: REQUEST_NOTES_CREATE,
    note: note
  };
}

function createNote(note) {
  return {
    type: CREATE_NOTE,
    note: note
  };
}

function requestUpdateNote(note) {
  return {
    type: REQUEST_NOTE_UPDATE,
    note: note
  };
}

function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note
  };
}

function requestDeleteNote(note) {
  return {
    type: REQUEST_NOTE_DELETE,
    note
  };
}

function receiveDeleteNote(note) {
  return {
    type: RECEIVE_NOTE_DELETE,
    note
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

async function postNote(data) {
  return await axios.post(`/notes`, data);
}

async function deleteNotes(note) {
  return await axios.delete(`/notes/${note.id}`);
}

function fetchNotes(id = '') {
  return async dispatch => {
    dispatch(requestNotes());
    const res = await getNotes(id);

    if (Array.isArray(res.data)) {
      return dispatch(receiveNotes(res));
    } else {
      return dispatch(updateNote(res.data));
    }
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

export function fetchNotesIfNeeded(id = '') {
  return (dispatch, getState) => {
    if (shouldFetchNotes(getState())) {
      return dispatch(fetchNotes(id));
    }
  };
}

export function editNote(note) {
  return async dispatch => {
    dispatch(requestUpdateNote(note));
    const res = await putNotes(note.id, note);
    dispatch(updateNote(res.data));
  };
}

export function addNote(data) {
  return async dispatch => {
    dispatch(requestCreateNote(data));
    const res = await postNote(data);
    return dispatch(createNote(res.data));
  };
}

export function removeNote(note) {
  return async dispatch => {
    dispatch(requestDeleteNote(note));
    await deleteNotes(note);
    return dispatch(receiveDeleteNote(note));
  };
}
