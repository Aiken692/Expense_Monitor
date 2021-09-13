import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
    //let expenseContent = <p>No expenses found.</p>

    if(props.items.length === 0){
        return <h2 className='.expense-List__fallback'>Found no expenses.</h2>
    }

    return <ul className='expense-List'>
            {props.items.map((expense) => 
            <ExpenseItem 
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            /> 
            )}
    </ul>
};

export default ExpenseList;