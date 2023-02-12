import _ from 'lodash';
import {
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  FETCH_STREAM,
} from '../actions/type';

export default (state = {}, action) => {
  switch (action.type) {
    //for all streams using mapKeys function
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload); //omit doesnt change the original object it just creates another one

    default:
      return state;
  }
};

//another cool thing about lodash is we can use mapKeys(streams,'id') function which convert array in to object
//example
// const colors = [{ id: 3 }, { id: 5 }, { id: 7 }];
// const ret = _.mapKeys(colors, 'id');
// result {'3':{'id':3},'5':{'id':5},'7':{'id':7}}
