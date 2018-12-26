import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]) // Creating the mock store with thunk which used in the original store.

test('Should setup remove expense action object',()=>{
    const action = removeExpense({id: '13'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '13'
    })
})

test('Should setup remove expense action object',()=>{
    const action = editExpense('13', {description: 'Test', amount: 'Test', createdAt: '123', note: 'Test'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '13',
        updates:{
            description: 'Test', 
            amount: 'Test', 
            createdAt: '123', 
            note: 'Test'
        }
    })
})

test('Should setup addExpense object with provided values', ()=>{
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})

test('Should Add expense to database and store', (done)=>{ // Test case called with done variable to note this is asynchronic test, only when the done called the test will be triggered
    const store = createMockStore({}) // Creating empty redux store
    const expenseData = { // creating dummy data
        description: 'Test',
        amount: 3200,
        note: 'This is a test note',
        createdAt: 123344
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{ // Dispatching the test with dummy data and triggering promise to pass the data when it's passed, In order the promise to work it's need to add return in the original database function.
        const actions = store.getActions() // Method used with redux mock to get the actions
        expect(actions[0]).toEqual({ // Expect the only action to to equal the action called from startAddExpense
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot)=>{ // The snapshot is a promise return of the database.ref

        expect(snapshot.val()).toEqual(expenseData)// Checking the database snapsho is equal to the dummy data
        done() // Calling done will trigger the test with the promise

    })
})

test('Should add expense with defaults to database and store', (done)=>{
    const store = createMockStore({}) // Creating empty redux store
    const expenseDefaults = { // creating defaults test data
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(()=>{ // Dispatching the test with dummy data and triggering promise to pass the data when it's passed, In order the promise to work it's need to add return in the original database function.
        const actions = store.getActions() // Method used with redux mock to get the actions
        expect(actions[0]).toEqual({ // Expect the only action to to equal the action called from startAddExpense
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot)=>{ // The snapshot is a promise return of the database.ref

        expect(snapshot.val()).toEqual(expenseDefaults)// Checking the database snapsho is equal to the dummy data
        done() // Calling done will trigger the test with the promise
        
    })
})
