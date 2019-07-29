import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM } from '../Actions/types';

import _ from 'lodash';

const INITIAL_STATE = {
};

const streamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload };
      break;

    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')}
      break;

    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload}
      break;

    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload}
      break;

    case DELETE_STREAM:
      return _.omit(state, action.payload)
      break;

    default:
      return state

  }
}

export default streamsReducer;
