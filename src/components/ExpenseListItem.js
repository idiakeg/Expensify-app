import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'


const ExpenseListItem = ({description, amount, createdAt, id }) => (
   <div>
       <h3> <Link to={`/edit/${id}`}>{description}</Link> </h3>
       <p> {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')} </p>

   </div>
)



export default ExpenseListItem //exported as expense list item


