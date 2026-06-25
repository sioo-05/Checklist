import './TodoItem.css'

const TodoItem = ({todo, onUpdate, onDelete}) => {

const onChangeCheckbox = () => {
    onUpdate(todo.id);
}

const onClick = () => {
    onDelete(todo.id)
}

    return (
        <div className='TodoItem'>
            <input type="checkbox" onChange={onChangeCheckbox} checked={todo.isDone}/>
            <div className='content'>{todo.content}</div>
            <div className='date'>{new Date(todo.date).toLocaleDateString()}</div>
            <button onClick={onClick}>삭제</button>
        </div>
    )
}

export default TodoItem;