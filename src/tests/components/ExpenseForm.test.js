import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'


test('shold render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('shold render expense form correctly with correct data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for unvalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change', ()=>{
    const value = "New description"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should set note on input change', ()=>{
    const value = "New Note"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('Should set valid amount value', ()=>{
    const value = '11.2'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Shouldnt set amount if invalid value', ()=>{
    const value = '11.2222'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe("")
})

test('Should call onsubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('Should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})


test('Should set new date on date change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})