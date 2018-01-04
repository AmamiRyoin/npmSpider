/**
 * Created by amamiryoin on 2017/5/31.
 */
import {combineReducers} from 'react-redux';
import {loadMore,LOAD_MORE,SEAECH_DOUJINSHI} from "../actions/action";

let utils = (state,action)=>{
    let defaultState = {
        page:0
    }
    state = state || defaultState;
    switch (action.type){
        case (LOAD_MORE) :
            return Object.assign({}, state, {
                page: action.index+1
            });
        case (SEAECH_DOUJINSHI):
            return Object.assign({}, state, {
                query: action.index
            });
        default:
            return state;
    }
}

export default utils;