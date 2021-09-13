import React, {useState} from 'react'; 
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    //Method One
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    //Submit handler
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm














//Method two for a single state.
   /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        entredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    }

    // This is the safer way to go with the lastest snapShot

    const amountChangeHandler = (event) => {
        setUserInput((prevState) =>{
            return {...prevState, enteredAmount: event.target.value };
        })
    }

    const  dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            setEnteredDate: event.target.value,
        })
    }*/

    //End of MEthod Two on states.
