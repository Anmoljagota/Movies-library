import {MOVIES_LOADING,MOVIES_SUCCESS,MOVIES_ERROR} from "./actionTypes";
const initial_state={
    movies:[],
    loading:false,
    error:false
}
const reducer=(state=initial_state,action)=>{
    const {type,payload}=action;
    switch(type){
        case MOVIES_LOADING:return {...state,loading:true};
        case MOVIES_SUCCESS:return {...state,loading:false,movies:payload};
        case MOVIES_ERROR:return {...state,error:true}
        default:return state
    }
}

export default reducer;