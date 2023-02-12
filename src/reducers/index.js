import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

//when we edit the stream we have tow options 1>using array based approach 2>using object based approach
//1}object -based approach
/* const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      /*  const newState={...state};
    newState[action.payload.id]=action.payload //replacing the new id
    return newState; */ //this is exactly equals to the KEY interpolation Syntax below [we grab all properties from our state and the second  argument acess the property id and the last one replace it]
/*     TODO: return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}; */
