import React from 'react'
import numeral from 'numeral'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = ({expensesAmount, expensesTotal}) => (
    <div>
    {
        <h2> Viewing {expensesAmount} {expensesAmount === 1? 'expense' : 'expenses'} totalling {numeral(expensesTotal).format('$0,0.00')}</h2>
    }      
    </div>
)

const mapStateToProps = (state)=>{
    const selectedExpenses = selectExpenses(state.expenses, state.filters)
    const expensesTotal = numeral(expensesTotal(props.expenses)/100)
    return {
        expensesAmount: selectedExpenses.length,
        expensesTotal: expensesTotal
    }
}

export default connect(mapStateToProps)(ExpenseSummary)