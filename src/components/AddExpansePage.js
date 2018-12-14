import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

export class AddExpansePage extends React.Component{
    onSubmit = (expense) =>{
        this.props.addExpense(expense)
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <h1>This is my add expense component</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

// This function allows to to use dispatch in more simplified way inside the componenet in order to test it
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

// Inside the connect function the "undefined" is for the mapStateToProps in order the mapDispatchToProps will be usable
export default connect( undefined , mapDispatchToProps)(AddExpansePage)