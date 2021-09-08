import React, {useState} from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expense = [
  {id: 'e1', title: 'Car Insurance', amount: 294, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'Toilet Paper', amount: 20, date: new Date(2021, 2, 28)},
  {id: 'e3', title: 'Food', amount: 294, date: new Date(2020, 5, 4)},
  {id: 'e4', title: 'Health Insurance', amount: 294, date: new Date(2020, 9, 24)},
];


function App() {
  const [expense, setExpense] = useState(Dummy_Expense);
 
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList items={expense}/>
    </div>
  );
}

export default App;
