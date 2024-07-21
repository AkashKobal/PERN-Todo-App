import './App.css';
import React,{Fragment} from 'react'
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';


function App() {
  return (
   <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />

      </div>
   </Fragment>
  );
}

export default App;
