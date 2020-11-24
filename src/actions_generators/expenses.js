import uuid from 'uuid'

// ADD EXPENSE action generator
export const addExpense = ( 
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
export const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id,
})

// EDIT_EXPENSE action generator
export  const editExpense = ( id, update ) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})