import {APPLY_CODE_CHANGES} from './constants';
import {fromJS, Map as iMap} from 'immutable';

const initialState = fromJS({
  code:''
});

const applyCodeChanges = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_CODE_CHANGES:
      return state.set('code',action.code);
    default:
      return state;
  }
};

export default applyCodeChanges;
