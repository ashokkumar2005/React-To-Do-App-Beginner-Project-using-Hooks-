function TodoItem(props){
    return(
        <div>
            <p>{props.text}</p>
            <button onClick={removeTodos}> delete</button>
        </div>
    )
}

export default TodoItem;