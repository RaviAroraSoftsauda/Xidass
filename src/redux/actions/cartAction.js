import {ADD_ITEM,REM_ITEM} from "./types";

export const addItem = (item) => dispatch =>{
    console.log(item);
    if(item){
       return dispatch({
           type:ADD_ITEM,
           payload:item
       });      
    }
};

export const clearItem =()=>dispatch=>{
    return dispatch({
        type:REM_ITEM
    });
}
