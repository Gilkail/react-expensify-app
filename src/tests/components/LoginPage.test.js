import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'
import {startLogin} from '../../actions/auth'
// import toJSON from 'enzyme-to-json'


test('Should render LoginPage correctly', ()=>{
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
    const onClickSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={onClickSpy}/>)
    wrapper.find('button').simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
})