 import { useState } from "react";

 const Addtask = ({addtask})=>{
   const [task,setTask] = useState("");

   const handletask = ()=>{
    addtask(task)
    setTask("")
   }

   return(  
    <>
    <label>
       <input
       value={task}
       onChange={(e)=> setTask(e.target.value)}
       placeholder="Enter task"/>
     </label>
     <button onClick={handletask}> Add task</button>
     </>
   )
 }

 export default Addtask;