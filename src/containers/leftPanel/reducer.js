import {APPLY_CODE_CHANGES} from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  code:''
});

const saveCode = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_CODE_CHANGES:
      return state.set('code',action.code);
    default:
      return state;
  }
};

export default saveCode;
