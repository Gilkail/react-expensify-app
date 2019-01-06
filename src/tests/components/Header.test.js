import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'
import {startLogout} from '../../actions/auth'
// import toJSON from 'enzyme-to-json'


test('Should render header correctly', ()=>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    const onClickSpy = jest.fn()
    const wrapper = shallow(<Header startLogout={onClickSpy}/>)
    wrapper.find('button').simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
})