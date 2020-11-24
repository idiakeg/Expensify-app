import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions_generators/filters'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (newCalendarFocused) => {
        this.setState(() => ({
            calendarFocused: newCalendarFocused
        }))
    }

    render () {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=> {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select onChange={(e) => {
                    e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
                }}>
                   <option value="date">Date</option>
                   <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                 startDate={this.props.filters.startDate}
                 endDate={this.props.filters.endDate}
                 onDatesChange={this.onDatesChange}
                 focusedInput={this.state.calendarFocused}
                 onFocusChange={this.onFocusChange}
                 numberOfMonths={1}
                 isOutsideRange={() => false}
                 showClearDates={true}
                />
            </div>
        )
         
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)  //This is being imported in the expenses dash board file as expenseListFilters