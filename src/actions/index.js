import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './type';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  //getState is a function that returns a state object
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
  };
};
//fetch streams-all streams on our data
export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};
//fetch stream-fetch single stream that has id
export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};
//fetch stream-editing[PUT request] the specific id and and the updated formvalues
export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
  };
};

//delete request
export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
  };
};
