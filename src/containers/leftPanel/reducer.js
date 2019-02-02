import { APPLY_CODE_CHANGES } from "./constants";
import { Map } from "immutable";

const initialState = Map({
  Tab0:{
    code:"",
    tab:0,
  },
  active:{
    code:"",
    tab:""
  }
});

const saveCode = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_CODE_CHANGES:return state.set(action.key,{
      code:action.code,
      tab:action.tab,
    });
    default:
      return state;
  }
};

export default saveCode;
