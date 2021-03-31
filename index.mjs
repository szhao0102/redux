import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
// 创建reducer
const reducer = (state = 0, action) => {
    switch(action.type) {
        case "add": return state + action.num;break;
        case "sub": return state - action.num;break;
    }
    return state
}
const Logger = logger.createLogger()
/**
 * 创建store
 * createStore 第二个参数优先级高于reducer里面的默认state
 */
const store = createStore(reducer, applyMiddleware(Logger))
const actionAddCreator = (num) => ({type: "add", num})
const actionSubCreator = (num) => ({type: "sub", num})


let unsub = store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(actionAddCreator(1))
store.dispatch(actionAddCreator(1))
store.dispatch(actionAddCreator(1))
store.dispatch(actionSubCreator(1))
