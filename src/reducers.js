import {combineReducers} from 'redux';
import saveCode from './containers/leftPanel/reducer';
import addMessage from './containers/rightPanel/reducer';

export default combineReducers({
  saveCode,
  addMessage,
});

