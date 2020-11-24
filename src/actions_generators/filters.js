// SET_TEXT_FILTER action generator
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT action generator
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})


// SORT_BY_DATE action generator
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_START_DATE action generator P.S- if date is not passed in, the  default will be undefined, so there really is no need for date = undefined
export const setStartDate = (startDate = undefined  ) => ({
    type: 'SET_START_DATE',
    date: startDate
})

// SORT_BY_END_DATE action generator
export const setEndDate = ( endDate = undefined) => ({
    type: 'SET_END_DATE',
    date: endDate
})