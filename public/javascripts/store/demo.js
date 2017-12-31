/**
 * Created by amamiryoin on 2017/6/2.
 */
let Redux = require('redux');
// import {createStore,combineReducers} from 'redux';
// 首先定义一个改变数据的plain函数，成为reducer
function todo (state={todos:""},action){
    switch (action.type) {
        default:
        return state
    }
}

function count (state, action) {
    let defaultState = {
        year: 2015,
    };
    state = state || defaultState;
    switch (action.type) {
        case 'add':
            console.log(state.year)
            return {
                year: state.year + 1
            };
        case 'sub':
            console.log(state.year)
            return {
                year: state.year - 1
            }
        default :
            return state;
    }
}
const toDoApp = Redux.combineReducers({
    count,
    todo
})
// store的创建
let store = Redux.createStore(toDoApp);

// store里面的数据发生改变时，触发的回调函数
store.subscribe( ()=> {
    console.log('the year is: ', store.getState());
});

// action: 触发state改变的唯一方法(按照redux的设计思路)
let action1 = { type: 'add' };
let action2 = { type: 'add' };
let action3 = { type: 'sub' };

// 改变store里面的方法
store.dispatch(action1); // 'the year is: 2016
store.dispatch(action2); // 'the year is: 2017
store.dispatch(action3);