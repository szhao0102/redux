import { createStore } from "redux";
// 创建reducer
const reducer = (state = 0, action) => {
    switch(action.type) {
        case "add": return state + action.num;break;
        case "sub": return state - action.num;break;
    }
    return state
}
// 创建store
const store = createStore(reducer,2)
const actionAddCreator = (num) => ({type: "add", num})
const actionSubCreator = (num) => ({type: "sub", num})
let unsub = store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(actionAddCreator(1))
store.dispatch(actionAddCreator(1))
store.dispatch(actionAddCreator(1))
store.dispatch(actionSubCreator(1))
