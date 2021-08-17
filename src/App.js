import ExpenseList from "./components/ExpenseList";


function App() {
  const expense = [
    {id: 'e1', title: 'Car Insurance', amount: 294, date: new Date(2020, 7, 14)},
    {id: 'e2', title: 'Toilet Paper', amount: 20, date: new Date(2021, 2, 28)},
    {id: 'e3', title: 'Food', amount: 294, date: new Date(2020, 5, 4)},
    {id: 'e4', title: 'Health Insurance', amount: 294, date: new Date(2020, 9, 24)},
  ];

  return (
    <div>
      <h2>Lets get started.</h2> 
      <ExpenseList items={expense}/>
    </div>
  );
}

export default App;
