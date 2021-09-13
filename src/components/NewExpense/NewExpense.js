import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEdiiting, setEditing] = useState(false);


    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setEditing(true);
    };

    return (
        <div className="new-expense">
            {!isEdiiting && <button onClick={startEditingHandler}>Add New Expense</button>} 
            {isEdiiting && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense
