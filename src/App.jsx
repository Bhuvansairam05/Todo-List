import "./App.css"
import { useState } from "react";
function App() {
  const [todos,setTodos] = useState([
    {title:"2 DSA Problems",completed:false}
  ]);
  const [input,setInput] = useState("");
  const d = new Date();

  const changeInput = (e)=>{
    setInput(e.target.value);
  }
  
  const addTodo = ()=>{
    if(input.trim()!=""){
      const newTodos = [...todos,{title:input,completed:false}];
      setTodos(newTodos);
      setInput("");
    }
  }
  const handleAdd = (e)=>{
    if(e.key === "Enter"){
      addTodo();
    }
  }

  const changeStatus = (index)=>{
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }
  return (
    <>
      <div className="container">
        <h1>My Todo List</h1>
        <ul className="list-container">
          {todos.map((todo,index)=>{
            return <li key={index}>
              <input type="checkbox" checked={todo.completed} onChange={()=>changeStatus(index)}></input>
              <span
                style={{textDecoration: todo.completed?"line-through":"none"}}
              >{todo.title}</span>
            </li>
          })}
        </ul>
        <input type="text" id="todo-input" value={input} placeholder="Add a new todo" onChange={changeInput} onKeyDown={handleAdd}/>

      </div>
    </>
  )
}
export default App