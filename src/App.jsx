import { useState } from "react"
import Addtask from "./components/Addtask.jsx";
import Todolist from "./components/todolist.jsx"
import "./index.css"

function App() {
 
   
   const[tasks,setTasks] = useState([]);

   const addTask = (newtask)=>{
    if(newtask.trim()==="") return;
    setTasks([...tasks, newtask]);
    
 }
 const deletetask =(index)=>{
   const filteredTasks= tasks.filter((_,i)=> i !== index);
   setTasks(filteredTasks)
 }

 const updateTask = (index,newvalue)=>{
    const updatevalue = [...tasks];
    updatevalue[index]=newvalue;
    setTasks(updatevalue);
 }


   return(
    <>
      <h1>TO-DO-APP</h1>
    <Addtask addtask={addTask}></Addtask>
    <Todolist 
    tasks={tasks} 
    deletetask={deletetask}
    update={updateTask}
    ></Todolist>

    
      
    
    </>
   )
}

export default App
