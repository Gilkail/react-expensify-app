import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import {login, logout} from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'
import 'core-js/fn/string/includes'
import 'airbnb-js-shims'
import LoadingPage from './components/LoadingPage'

const store = configureStore()

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})