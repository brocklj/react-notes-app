import {
  REQUEST_NOTES,
  RECEIVE_NOTES,
  REQUEST_NOTES_CREATE,
  CREATE_NOTE,
  REQUEST_NOTE_UPDATE,
  UPDATE_NOTE,
  REQUEST_NOTE_DELETE,
  RECEIVE_NOTE_DELETE
} from '../actions/NoteActions';

function NotesReducer(
  state = {
    isFetching: false,
    didInvalidate: true,
    notes: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_NOTES:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: true
      });

    case RECEIVE_NOTES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        notes: action.notes,
        lastUpdated: action.recivedAt
      });

    case REQUEST_NOTES_CREATE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: true
      });

    case CREATE_NOTE:
      state.notes.push(action.note);
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        notes: [...state.notes],
        lastUpdated: Date.now()
      });

    case REQUEST_NOTE_UPDATE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: true
      });

    case UPDATE_NOTE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        notes: state.notes.map(note => {
          if (note.id == action.note.id) {
            return action.note;
          }
          return note;
        })
      });

    case REQUEST_NOTE_DELETE:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: true
      });

    case RECEIVE_NOTE_DELETE:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: false,
        notes: state.notes.filter(note => note.id != action.note.id)
      });
    default:
      return state;
  }
}

export default NotesReducer;
