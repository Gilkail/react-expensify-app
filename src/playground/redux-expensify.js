import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

// Add expnes
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// Remove expense
const removeExpense = (expenseId) =>({
    type: 'REMOVE_EXPENSE',
    expenseId
})


// Edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=> expense.id !== action.expenseId)
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            })
        default: 
            return state
    }
}


// Text filter 

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Filteres reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'Date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'Date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// Get Visisble expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} = {}) => {
    // return expenses
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if(sortBy === 'Date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'Amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseTwo = store.dispatch(addExpense({description: 'Mobile bill', amount: 200, createdAt: 1200}))
const expenseOne = store.dispatch(addExpense({description: 'Coffee', amount: 10, createdAt: 200}))
const expensethree = store.dispatch(addExpense({description: 'Rent', amount: 2110, createdAt: 400}))
// store.dispatch(removeExpense(expenseOne.expense.id))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 300}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter('o'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(-2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(0))
