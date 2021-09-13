import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    // Filtering the expenses by date 
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <Card className="expenses">
            {/* If there is no expense it throws and exception No expenses found*/}
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

             <ExpenseList items={filteredExpenses}/>   

        </Card>
    )
}

export default Expenses
