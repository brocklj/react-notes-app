import { combineReducers } from 'redux';
import NotesReducer from './NotesReducer';
import LangReducer from './LangReducer';

export default combineReducers({
  NotesReducer,
  LangReducer
});
