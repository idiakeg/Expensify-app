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
  



