import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { createStore } from 'redux'
import ReactDOM from 'react-dom'
// import { Provider, connect } from 'react-redux'

class Counter extends Component {
    render() {
        // const {value, onInc} = this.props
        return (
            <div>
                1
                {/* <span>{value}</span>
                <button onClick={onInc}>Inc</button> */}
            </div>
        )
    }
}
// const Counter = (props) => {
//     const {value, onInc} = props
//     return (
//         <div>
//             <span>{value}</span>
//             <button onClick={onInc}>Inc</button>
//         </div>
//     )
// }
// Counter.PropTypes = {
//     value: PropTypes.number.isRequired,
//     onInc: PropTypes.func.isRequired
// }

// const Action = {type: "add"}

// const Reducer = (state = { count: 0}, action) => {
//     switch(action.type) {
//         case 'add': return {count: state.count + 1};break;
//         default: return state
//     }
// }

// const store = createStore(Reducer)

// const mapStateToProps = (state) => {
//     return {
//         value: state.count
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onInc: () => dispatch(Action)
//     }
// }

// const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
    <Counter />,
    // <Provider store = {store}>
    //     <App />
    // </Provider>,
    document.getElementById('root')
)