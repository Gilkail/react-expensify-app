import React from 'react'
import ExpenseListItem from '../../components/ExpenseListItem'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

test('Should match the expense list item', ()=>{
    const ListItemData = expenses[1]
    const wrapper = shallow(<ExpenseListItem {...ListItemData}/>)
    expect(wrapper).toMatchSnapshot()
})