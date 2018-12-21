
import expenses from '../fixtures/expenses'
import getExpenseTotal from '../../selectors/expenses-total'

test('Should return 0',()=>{
    const expenses = []
    const total = getExpenseTotal(expenses)
    expect(total).toBe(0)
})

test('Should return The amount of first object in array',()=>{
    const expenses = [{
        amount: 1200
    }]
    const total = getExpenseTotal(expenses)
    expect(total).toBe(1200)
})

test('Should return The sun amount of all object in array',()=>{
    const total = getExpenseTotal(expenses)
    expect(total).toBe(3935)
})