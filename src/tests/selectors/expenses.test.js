import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should filter by text value', ()=>{
    const filters = {
        text: "e",
        sortBy: "Date",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})

test('shold filter by start date', ()=>{
    const filters = {
        text: "",
        sortBy: "Date",
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('shold filter by end date', ()=>{
    const filters = {
        text: "",
        sortBy: "Date",
        startDate: moment(0).subtract(4, 'days'),
        endDate: moment(0).add(1, 'days')
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('shold sort by date', ()=>{
    const filters = {
        text: "",
        sortBy: "Date",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('shold sort by date', ()=>{
    const filters = {
        text: "",
        sortBy: "Amount",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})