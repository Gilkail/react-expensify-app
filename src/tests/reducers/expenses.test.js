import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should note remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add another expense into array', ()=>{
    const expense = {
        id: '4',
        description: "Test",
        note: "Test",
        amount: 120,
        createdAt: 12135
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state[3]).toEqual(expense)
})


test('Should edit expense', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {description: "Changed"}
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe("Changed")
})

test('Shouldnt return edited expense', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '111',
        updates: {description: "Changed"}
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})