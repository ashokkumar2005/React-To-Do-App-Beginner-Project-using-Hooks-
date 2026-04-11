import { useEffect, useState } from "react"

 
 const Todoitem=({tasks,index,update,deletetask})=>{

    const[isediting,setisEditing]=useState(false);
    const[edited,setEdited]=useState(tasks);
    useEffect(()=>{
        setEdited(tasks);

    },[tasks])

    const handleUpdate=()=>{
        update(index,edited)
        setisEditing(false);

    }

    return(
        <><li>
            {isediting ? (
                <>
                <input value={edited} onChange={(e)=>setEdited(e.target.value)}/>
                <button onClick={handleUpdate}>Update</button>
                </>
            )
            :(
            <>
            {tasks}
            <button onClick={()=>deletetask(index)}>Delete</button>
             <button onClick={()=>setisEditing(true)}>Edit</button>
            </>)}
        </li>
        
        </>
    )
 }
 export default Todoitem;