import * as actions from '../actions/NoteActions';

describe('Note Actions', () => {
  test('should add note to the list', () => {
    const note = { id: 1, title: 'Name' };
    const expected = {
      type: actions.CREATE_NOTE,
      note
    };
    expect(actions.createNote(note)).toEqual(expected);
  });
});
