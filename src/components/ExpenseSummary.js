import React from 'react'
import numeral from 'numeral'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = (props) => (
    <div>
    {
        <h2> Viewing {props.expenses.length} {props.expenses.length === 1? 'expense' : 'expenses'} totalling {numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}</h2>
    }      
    </div>
)

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)