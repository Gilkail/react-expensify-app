import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

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
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 1900,
        note: 'This is a test'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup addExpense object with default values', ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: "", 
            note: "", 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})
