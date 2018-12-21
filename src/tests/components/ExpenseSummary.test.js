import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test('Should return viewing all expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should return viewing 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} />)
    expect(wrapper).toMatchSnapshot()
})