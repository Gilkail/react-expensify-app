import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper

beforeEach(()=>{
    editExpenseSpy = jest.fn()
    removeExpenseSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage expense={expenses[0]} startEditExpense={editExpenseSpy} startRemoveExpense={removeExpenseSpy} history={historySpy}/>)
})

test('should render EditExpensePage', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should check the startEditExpense submission', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test('should check the removeExpense submission', () => {
    wrapper.find('button').prop('onClick')(expenses[0].id)
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseSpy).toHaveBeenLastCalledWith("1")
})