import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        {
            props.expenses.length === 0 ? (
                <p>no expenses</p>
            ) : (
                props.expenses.map((expense, index)=>(
                    <div key={index}>
                    <ExpenseListItem {...expense}/>
                    </div>
                ))
            )
        }
    </div>
)

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)