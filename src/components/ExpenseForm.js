import React from 'react'
import moment from 'moment'
import { SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expenses ? props.expenses.description : '',
            note: props.expenses ? props.expenses.note : '',
            amount: props.expenses ? (props.expenses.amount / 100).toString() : '',
            createdAt: props.expenses ? moment(props.expenses.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const newDescription = e.target.value
        this.setState(() => ({
            description: newDescription
        }))
    }

    onNoteChange = (e) => {
        const newNote = e.target.value
        this.setState(() => ({
            note: newNote
        }))
    }

    onAmountChange = (e) => {
        const newAmount = e.target.value
        if(!newAmount || newAmount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount: newAmount }))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
           this.setState(()=>({ createdAt: createdAt }))
        }
    } 

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
      e.preventDefault()  
      if(!this.state.description || !this.state.amount){
        this.setState(() => ({ error: 'Please provide description and amount'}))
      }else{
          this.setState(() => ({ error: ''}))
          this.props.onSubmit({
              description: this.state.description,
              note: this.state.note,
              amount: parseFloat(this.state.amount),
              createdAt: this.state.createdAt.valueOf()
          })
      }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    placeholder="Description" 
                    onChange={this.onDescriptionChange} 
                    value={this.state.description} 
                    />

                    <input 
                    type="number" 
                    placeholder="Amount" 
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />

                    <textarea 
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    ></textarea>

                    <button>AddExpense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm