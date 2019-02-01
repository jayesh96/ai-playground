import {ADD_MESSAGE} from './constants';

const addMessage = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          message:action.message
        }
      ]
    default:
      return state;
  }
};

export default addMessage;
