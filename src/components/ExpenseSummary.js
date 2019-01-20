import React from 'react'
import numeral from 'numeral'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = ({expensesCount, totalSum}) => (
    <div className="page-header">
    {   
        <div className="content-container">
            <h2 className="page-header__title"> Viewing <span>{expensesCount} {expensesCount === 1? 'expense' : 'expenses'}</span> totalling <span>{numeral(totalSum).format('$0,0.00')}</span></h2>
            <div className="page-header__actions">
                <Link to="/create" className="button">Add Expense</Link>
            </div>
        </div>
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