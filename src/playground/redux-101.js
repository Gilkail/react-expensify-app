import {createStore} from 'redux'

// Action generators
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({setTo = 0} = {}) => ({
    type: 'SET',
    setTo: setTo
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

// Creating reducer
const countReducer = (state = { count: 0 }, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return{
                count: action.setTo
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

// Creating store with called reducer
const store = createStore(countReducer)

// Subscribing store
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

// Calling action
store.dispatch(incrementCount({incrementBy: 5}))


store.dispatch(resetCount())

store.dispatch(setCount({setTo: 22}))

store.dispatch(decrementCount({decrementBy: 2}))

