import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEdiiting, setIsEditing] = useState(false);


    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEdiiting && <button onClick={startEditingHandler}>Add New Expense</button>} 
            {isEdiiting && 
            <ExpenseForm 
                onSaveExpenseData={SaveExpenseDataHandler}
                onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense
