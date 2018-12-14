import React from 'react'
import {shallow} from 'enzyme'
import {AddExpansePage} from '../../components/AddExpansePage'
import expenses from '../fixtures/expenses'

let addExpenseSpy, history, wrapper

beforeEach(()=>{
    addExpenseSpy = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpansePage addExpense={addExpenseSpy} history={history}/>)
})

test('should render addExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should handle onsubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[0])
})