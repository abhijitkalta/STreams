import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM } from './types';
import streams from '../Apis/streams';

export const signIn = (currentUserId ) => {
  return {
    type: SIGN_IN,
    payload: currentUserId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}

export const createStream = (formValues) => {
  return async (dispatch) => {
    const response = await streams.post('/streams', formValues);
    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    })
  }
}

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('./streams');
    disptach({
      type: FETCH_STREAMS,
      payload: response.data
    })
  }
}

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`./streams/${id}`);
    disptach({
      type: FETCH_STREAM,
      payload: response.data
    })
  }
}

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`./streams/${id}`, formValues);
    disptach({
      type: EDIT_STREAM,
      payload: response.data
    })
  }
}

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`./streams/${id}`);
    disptach({
      type: DELETE_STREAM,
      payload: id
    })
  }
}
