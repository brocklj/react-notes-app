import { CHANGE_LANG } from '../actions/LangActions';

function LangReducer(
  state = { locale: process.env.LANG, didInvalidate: true },
  action
) {
  switch (action.type) {
    case CHANGE_LANG:
      return Object.assign({}, state, {
        didInvalidate: false,
        locale: action.locale
      });

    default:
      return state;
  }
}

export default LangReducer;
