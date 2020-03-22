import * as actions from '../actions/NoteActions';
import NoteReducer from '../reducers/NotesReducer';

describe('Note reducer', () => {
  test('Test NoteReducer intial state', () => {
    expect(NoteReducer(undefined, {})).toEqual({
      isFetching: false,
      didInvalidate: true,
      notes: []
    });
  });

  test('Test Add Note', () => {
    const note = { id: 1, title: 'To test' };
    expect(
      NoteReducer(undefined, {
        type: actions.CREATE_NOTE,
        note
      })
    ).toEqual({
      isFetching: false,
      didInvalidate: false,
      notes: [note],
      lastUpdated: Date.now()
    });
  });
});
