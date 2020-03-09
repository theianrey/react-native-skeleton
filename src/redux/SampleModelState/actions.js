/**
 * * Add all acctions on this file
 */
import actions from './actionTypes';

export const addState = (key, value) => async dispatch => {
  dispatch({type: actions.ADD, payload: {key, value}});
};
