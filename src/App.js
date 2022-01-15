import React ,{useState,useEffect}from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import Todo from './Components/Todo';
// import db from './firebase.js';

function App() {
const [todos,setTodos]=useState(['take dog to walk','buy medicines','dance practice at 1000hrs']);
// useEffect(()=>{
//  db.collection('todos').onSnapshot(snapshot=>{
//    setTodos(snapshot.docs.map(doc=> doc.data().todo))
//  })
// },[]);

const [input,setInput]=useState('');


const addTodo=(e)=>{
  e.preventDefault();
  console.log("i am working");
  setTodos([...todos, input]);
  setInput('');
}


  return (
    <div className="App">
      <h1>Hello world</h1>
      <form >
      
      <FormControl>
        <InputLabel>✅Write a Todo</InputLabel> 
        <Input value={input} onChange={e => setInput(e.target.value)}/>
      </FormControl>


      <Button disabled={!input} type="submit" variant="contained" onClick={addTodo} color="primary">
        Add todo
      </Button>
      </form>

      <ul>
        {todos.map(todo =>(
           <Todo text={todo}/>
        )) }
      </ul>
    </div>
  );
}

export default App;
