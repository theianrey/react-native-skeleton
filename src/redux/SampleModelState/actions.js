/**
 * * Add all acctions on this file
 */
import actions from './actionTypes';

export const addState = (key, value) => async dispatch => {
  // ? do extra stuff here...

  // * dispatch your action
  dispatch({type: actions.ADD, payload: {key, value}});
};
