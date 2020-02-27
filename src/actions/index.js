import axios from '../utils/axios';

/* Get Notes */
async function getNotes(id = '') {
  return await axios.get(`/notes${id}`);
}
export const INVALIDATE_NOTES = 'INVALIDATE_NOTES';
export const REQUEST_NOTES = 'REQUEST_NOTES';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';

export function invalidateNotes() {
  return {
    type: INVALIDATE_NOTES
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

function fetchNotes() {
  return async dispatch => {
    dispatch(requestNotes());
    const json = await getNotes();
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
