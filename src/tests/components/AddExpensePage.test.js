import React from 'react'
import {shallow} from 'enzyme'
import {AddExpansePage} from '../../components/AddExpansePage'
import expenses from '../fixtures/expenses'

let startAddExpenseSpy, history, wrapper

beforeEach(()=>{
    startAddExpenseSpy = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpansePage startAddExpense={startAddExpenseSpy} history={history}/>)
})

test('should render addExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should handle onsubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[0])
})