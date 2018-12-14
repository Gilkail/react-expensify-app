import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddExpansePage from '../components/AddExpansePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'


const AppRouter = () => (
    <BrowserRouter>
        <div> 
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpansePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>

) 

export default AppRouter
