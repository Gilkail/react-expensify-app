import moment from 'moment'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters'


test('Should generate set end date action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should generate default text filter', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ""
    })
})

test('Should generate text filter with value', ()=>{
    const action = setTextFilter('Test value')
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: "Test value"
    })
})

test('Should generate sort by amount action', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should generate sort by date action', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})