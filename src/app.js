import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import {addExpense} from './actions_generators/expenses'
import {setTextFilter} from './actions_generators/filters'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.css'
import { StaticRouter } from 'react-router-dom'

const store = configureStore()

store.dispatch(addExpense({ description: 'water bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'rent', amount: 10950}))


// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
)

  // LOCATION of  render
  const appRoot = document.getElementById('app')
  
  // REACT DOM rendering
  ReactDOM.render(jsx, appRoot)
  



