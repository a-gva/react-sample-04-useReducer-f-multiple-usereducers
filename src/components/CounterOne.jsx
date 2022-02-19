// reference: https://www.youtube.com/watch?v=IHJ-TO_1nME
// import usereducer from react
import React, { useReducer } from 'react'

export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
}

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case ACTIONS.INCREMENT:
            return state + 1
        case ACTIONS.DECREMENT:
            return state - 1
        case ACTIONS.RESET:
            return initialState
        default:
            return state
    }
}

export default function CounterOne() {
    // call useReducer, passing in reducer function and initial state
    const [count, dispatch] = useReducer(reducer, initialState)
    // a caal to use reducer returns a pari of values: 
    // COUNT = current value of the state
    // DISPATCH = accepts an action to execute the code specified in the onClick function

    return (
        <div>
            <div>
                <h1>
                    Count: {count}
                </h1>
            </div>
            <button onClick={() => dispatch(ACTIONS.INCREMENT)}>Increment</button>
            <button onClick={() => dispatch(ACTIONS.DECREMENT)}>Decrement</button>
            <button onClick={() => dispatch(ACTIONS.RESET)}>Reset</button>
        </div>
    )
}

// export default CounterOne