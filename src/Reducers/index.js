import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamsReducer from  './streamsReducer'
import { reducer as formReducer } from 'redux-form'


const rootReducer =  combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});

export default rootReducer;
