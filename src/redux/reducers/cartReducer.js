import { ADD_ITEM, REM_ITEM } from "../actions/types";

const initialState = {
   item:[]
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
         item:action.payload
        };
    case REM_ITEM:
        return{
            ...state,
       item:initialState.item
        }
      default:
        return state;
    }
  }