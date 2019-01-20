import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'

export class AddExpansePage extends React.Component{
    onSubmit = (expense) =>{
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

// This function allows to to use dispatch in more simplified way inside the componenet in order to test it
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

// Inside the connect function the "undefined" is for the mapStateToProps in order the mapDispatchToProps will be usable
export default connect( undefined , mapDispatchToProps)(AddExpansePage)