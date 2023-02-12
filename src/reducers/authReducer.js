import { SIGN_OUT, SIGN_IN } from '../actions/type';
//capital letter is used to say that it shouldnt be touched[modified]
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default authReducer;
