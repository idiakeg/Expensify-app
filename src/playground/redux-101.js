import { createStore} from 'redux'
import { Switch } from 'react-router-dom'

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    increment: incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrement: decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count_option: count
})

const countReducer = (state = { count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return { count: state.count + action.increment}
        case 'DECREMENT':
            return { count: state.count - action.decrement}
        case 'SET':
            return { count: action.count_option }
        case 'RESET':
            return { count: 0}
        default:
            return state
    }
}

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState())
})


// define an action and dispatch it
store.dispatch(incrementCount())

store.dispatch(incrementCount({ incrementBy: 5}))

// unsubscribe()

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))


store.dispatch(setCount({count: 100}))