import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions_generators/expenses'

const EditExpensePage = (props) => {
  console.log(props)
  return  (
    <div>
      <ExpenseForm 
      expenses={props.expenses}
      onSubmit={ (expense) => {
        props.dispatch(editExpense(props.match.params.id, expense))
        props.history.push('/')
      }}
      />
      <button 
      onClick={() => {
        props.dispatch(removeExpense({id: props.expenses.id}))
        props.history.push('/')
      }}
      >
       Remove
       </button>
    </div>
)   
  
}

const mapStateToStore = (state, props) => ({
  expenses: state.expenses.find((expense) => expense.id === props.match.params.id )
})

export default connect(mapStateToStore)(EditExpensePage)