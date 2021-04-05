import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { applyMiddleware, createStore } from 'redux'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import axios from 'axios'
import thunk from 'redux-thunk'
class Counter extends Component {
    render() {
        const {value, onInc} = this.props
        return (
            <div>
                
                <span>{value}</span>
                <button onClick={onInc}>Inc</button>
            </div>
        )
    }
}
const Action = () => {
    return dispatch => {
        axios.get('./dist/test.json')
        .then((res) => {console.log(res);return dispatch({type: "add",count: 1})})
        .catch((err) => {console.log(err);return dispatch({type: "add", count: 2})})
    }
}
const Reducer = (state = { count: 0}, action) => {
    switch(action.type) {

        case 'add': return {count: state.count + action.count};break;
        default: return state
    }
}

const store = createStore(Reducer, applyMiddleware(thunk))

const mapStateToProps = (state) => {
    return {
        value: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: () => dispatch(Action())
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)