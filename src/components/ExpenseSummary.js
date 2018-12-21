import React from 'react'
import numeral from 'numeral'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = ({expensesCount, totalSum}) => (
    <div>
    {
        <h2> Viewing {expensesCount} {expensesCount === 1? 'expense' : 'expenses'} totalling {numeral(totalSum).format('$0,0.00')}</h2>
    }      
    </div>
)

const mapStateToProps = (state)=>{
    const selectedExpenses = selectExpenses(state.expenses, state.filters)
    const total = numeral(expensesTotal(selectedExpenses)/100)
    return {
        expensesCount: selectedExpenses.length,
        totalSum: total
    }
}

export default connect(mapStateToProps)(ExpenseSummary)