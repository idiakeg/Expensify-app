import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions_generators/expenses'

const AddExpensePage = ({ dispatch, history }) => (
    <div>
      <h1>Add Expense</h1> 
      <ExpenseForm
      onSubmit={(expense) => {
        dispatch(addExpense(expense))
        history.push('/')
      }} />
    </div>
)


export default connect()(AddExpensePage)