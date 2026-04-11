import Todoitem from "./todoitem.jsx";

const Todolist=({tasks,update,deletetask})=>{

    return(
        <>
            <ul>{tasks.map((t,index)=>(
                
                <Todoitem
                 key={index}
                 tasks={t}
                 index={index}
                 deletetask={deletetask}
                 update={update}
                 />))}</ul>
        </>
    )
}

export default Todolist;