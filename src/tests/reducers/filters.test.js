import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('Should setup default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'Date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should setup sortby to Amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('Amount')
})

test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        sortBy: 'Amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')        
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('Date')
})

test('should set text filter', ()=>{

    const action = {type: 'SET_TEXT', text: "This is a test"}

    const state = filtersReducer(undefined, action)

    expect(state.text).toBe("This is a test")
})

test('should set start date', ()=>{

    const startOfDay = moment().startOf('day')
    const action = {type: 'SET_START_DATE', startDate: startOfDay}

    const state = filtersReducer(undefined, action)

    expect(state.startDate).toEqual(startOfDay)
})

test('should set end date', ()=>{

    const endOfDay = moment().endOf('day')
    const action = {type: 'SET_END_DATE', endDate: endOfDay}

    const state = filtersReducer(undefined, action)

    expect(state.endDate).toEqual(endOfDay)
})