import uuid from 'uuid'
import database from '../firebase/firebase'


// Add expense function which will trigger the addExpense action called from AddExpansePage
export const startAddExpense = (expenseData = {}) => { // Object transfered from 
    return (dispatch) => { // Transfering action dispatch due to thunk configured in store config file
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData // Destructuring object and setting up defaults
        const expense = {description, note, amount, createdAt} // Passing variables to expense array
        return database.ref('expenses').push(expense) // Pushing the data to firebase
            .then((ref)=>{ // Getting promise from fetched data with the ref
                dispatch(addExpense({ // Calling the addExpense dispatch
                    id: ref.key, // Taking the generated key from the fetched data using ref.key
                    ...expense // Spreading the expense object and passing to the action generator
                }))
        })
    }
}

// Add expnese
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

// Remove expense
export const removeExpense = ({id} = {}) =>({
    type: 'REMOVE_EXPENSE',
    id
})


// Edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

// export const startSetExpenses

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = []
            snapshot.forEach((expense)=>{
                expenses.push({
                    id: expense.key,
                    ...expense.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}