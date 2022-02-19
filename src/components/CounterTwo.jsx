// reference: https://www.youtube.com/watch?v=IHJ-TO_1nME
// import usereducer from react
import React, { useReducer } from 'react'

export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    INCREMENT2: 'increment2',
    DECREMENT2: 'decrement2',
    RESET: 'reset'
}

// Initial State 
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}


const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, firstCounter: state.firstCounter + action.value }
        case ACTIONS.DECREMENT:
            return { ...state, firstCounter: state.firstCounter - action.value }
        case ACTIONS.INCREMENT2:
            return { ...state, secondCounter: state.secondCounter + action.value }
        case ACTIONS.DECREMENT2:
            return { ...state, secondCounter: state.secondCounter - action.value }
        case ACTIONS.RESET:
            return initialState
        default:
            return state
    }
}

export default function CounterTwo() {
    // call useReducer, passing in reducer function and initial state
    const [count, dispatch] = useReducer(reducer, initialState)
    // a caal to use reducer returns a pari of values: 
    // COUNT = current value of the state
    // DISPATCH = accepts an action to execute the code specified in the onClick function

    return (
        <div>
            <div>
                <h1>
                    1st Counter: {count.firstCounter}
                </h1>

                <div>
                    <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, value: 1 })}>Decrement</button>
                    <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, value: 1 })}>Increment</button>
                    <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, value: 5 })}>Decrement 5</button>
                    <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, value: 5 })}>Increment 5</button>
                </div>

                <h1>
                    2nd Counter: {count.secondCounter}
                </h1>
            </div>
            <div>
                <button onClick={() => dispatch({ type: ACTIONS.DECREMENT2, value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: ACTIONS.INCREMENT2, value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: ACTIONS.DECREMENT2, value: 5 })}>Decrement 5</button>
                <button onClick={() => dispatch({ type: ACTIONS.INCREMENT2, value: 5 })}>Increment 5</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
            </div>


        </div>
    )
}

// export default CounterTwo