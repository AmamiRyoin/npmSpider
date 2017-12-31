/**
 * Created by amamiryoin on 2017/5/31.
 */
import {combineReducers} from 'react-redux';
import {loadMore,LOAD_MORE} from "../actions/action";

let utils = (state,action)=>{
    let defaultState = {
        page:0
    }
    state = state || defaultState;
    switch (action.type){
        case (action.type) :
            return {
                page:state.page+1
            };
        default:
            return {
                page:state.page
            };
    }
}

export default utils;