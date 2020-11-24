import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD EXPENSE action generator
const addExpense = ( 
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {} 
 ) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        // I used the property shorthand i.e description: description, note: note
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE EXPENSE action generator
const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id,
})

// EDIT_EXPENSE action generator
const editExpense = ( id, update ) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})

// SET_TEXT_FILTER action generator
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT action generator
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})


// SORT_BY_DATE action generator
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_START_DATE action generator P.S- if date is not passed in, the  default will be undefined, so there really is no need for date = undefined
const setStartDate = (startDate = undefined  ) => ({
    type: 'SET_START_DATE',
    date: startDate
})

// SORT_BY_END_DATE action generator
const setEndDate = ( endDate = undefined) => ({
    type: 'SET_END_DATE',
    date: endDate
})


// Expense reducer
const expensesReducerDefault = []

const expensesReducer = (state = expensesReducerDefault , action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [ ...state, action.expense ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id )
        case 'EDIT_EXPENSE':
           return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    }
                }else{
                    return expense
                }
            })
        default:
            return state
    }
}

// Filter Reducer
const filterReducerDefault ={
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefault, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort ( (a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount > b.amount ? -1 : 1
        }
    })
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

// watching for the change and printing it to the console

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// Dispatching the said action in the action generators

const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 100, createdAt: 2500 } ))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 500, createdAt: 1500}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense( expenseTwo.expense.id, {amount: 900} ))

// store.dispatch(setTextFilter(''))
// store.dispatch(setTextFilter('RENT'))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(540))
// store.dispatch(setEndDate())




const demoState = {
    expenses: [{
        id: 'ugvbhcb',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        enddate: undefined
    }
}

