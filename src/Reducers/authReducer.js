import { SIGN_IN, SIGN_OUT } from '../Actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  currentUserId: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, currentUserId: action.payload };
      break;
    case SIGN_OUT:
      return { ...state, isSignedIn: false, currentUserId: null };
      break;
    default:
      return state;
  }
}

export default authReducer;
