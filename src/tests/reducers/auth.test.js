import authReducer from '../../reducers/auth.js'

test('Should check if the auth state is loggedin with current id', ()=>{
    const action = {
        type: 'LOGIN',
        uid: '1'
    }
    const state = authReducer({}, action)
    expect(state).toEqual({uid: '1'})
})

test('Should check if the auth state is Logget out with empty object', ()=>{
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: '1'}, action)
    expect(state).toEqual({})
})