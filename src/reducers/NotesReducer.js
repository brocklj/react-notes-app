import { REQUEST_NOTES, RECEIVE_NOTES, ADD_NOTE, EDIT_NOTE } from '../actions/';

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

    case ADD_NOTE:
      state.notes.push(action.newNote);
      return Object.assign({}, state, {
        isFetching: state.isFetching,
        didInvalidate: true,
        notes: [...state.notes],
        lastUpdated: Date.now()
      });

    case EDIT_NOTE:
      const notes = state.notes.map(note => {
        if (note.id == action.note.id) {
          return action.note;
        }
        return note;
      });
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        notes: [...notes]
      });

    default:
      return state;
  }
}

export default NotesReducer;
