import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altfilters} from '../fixtures/filters'
import { isMoment } from 'C:/Users/Gil/AppData/Local/Microsoft/TypeScript/2.9/node_modules/moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
            filters={{filters}}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
})

test('should render expense list filters correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should render expense list filters with alt data correctly', ()=>{
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', ()=> {
    const value = altfilters.text
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(altfilters.text)
})

test('should handle sortBy change', ()=> {
    const value = "Date"
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should handle sortBy change', ()=> {
    const value = "Amount"
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle datepicker change', ()=> {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate)
})

test('should handle datepicker change', ()=> {
    const calendarFocused = null
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
