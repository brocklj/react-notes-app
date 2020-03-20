export const CHANGE_LANG = 'CHANGE_LANG';

function performLangChange(locale) {
  return {
    type: CHANGE_LANG,
    locale
  };
}

export function changeLang(locale) {
  return dispatch => {
    dispatch(performLangChange(locale));
  };
}
