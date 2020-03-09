/**
 *
 */
// *
import {produce} from 'immer';
import actions from './actionTypes';

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, {type, payload}) => {
  console.log('reducer is fired');

  switch (type) {
    case actions.ADD: {
      // ! sample state add/update
      const newImmutableState = produce(state, _state => {
        _state[payload.key] = payload.value;
      });

      // * ... do other stuff

      // * return your newly updated state
      return newImmutableState;
    }
  }
};
