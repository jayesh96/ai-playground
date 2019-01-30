import {APPLY_CODE_CHANGES} from './constants';

const applyCodeChanges = (state = [], action) => {
  switch (action.type) {
    case APPLY_CODE_CHANGES:
      return [
        ...state,
        {
          code: action.code,
        },
      ];
    default:
      return state;
  }
};

export default applyCodeChanges;
