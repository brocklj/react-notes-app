import { REQUEST_NOTES, RECEIVE_NOTES } from '../actions/';

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

    default:
      return state;
  }
}

export default NotesReducer;
