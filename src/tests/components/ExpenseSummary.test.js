import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('Should return viewing all expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expensesAmount={12} totalSum={200} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should return viewing 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expensesAmount={1} totalSum={200} />)
    expect(wrapper).toMatchSnapshot()
})