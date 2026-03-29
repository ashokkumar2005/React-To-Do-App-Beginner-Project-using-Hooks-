import { useState } from "react"

function App() {

    //states
    [Todo,setTodo]=useState("");
    [Todos,setTodos]=useState();

    //handle submit
    const handlechage=(e)=>{
        setTodo(e.target.value);
    };

    //form result
    const submmitform = (e)=>{
        e.preventDefalut();

        if(Todo ==="") return;
        setTodos([...Todos,Todo])
        setTodo("");

    };

    //delete
 const deleteitem = (index)=>{

    const newtodo=Todos.filter((_,i)=>i !== index);
    setTodos(newtodo);

 }

 return(
    <div>
        <form onSubmit={submmitform}>
            <input
             type="text"
             value={Todo}
             onClick={handlechage}
             placeholder="enter a task"
            ></input>
        <button>add</button>
        </form>

        {Todos.length===0 ? (<h3>No task yet</h3>) : (
            todos.map((item,index)=>(
                <Todoitem 
                key={index}
                text={item}
                removeTodos ={()=>removeTodos(index)}></Todoitem>
            ))
        )}

    </div>
 )


}

export default App
