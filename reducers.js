import {combineReducers} from 'redux';
import applyCodeChanges from './src/containers/leftPanel/reducer';
import addMessage from './src/containers/rightPanel/reducer';

export default combineReducers({
  applyCodeChanges,
  addMessage,
});
