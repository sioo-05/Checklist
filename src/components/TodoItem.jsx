import './TodoItem.css'

const TodoItem = ({todo, onUpdate}) => {

const onChangeCheckbox = () => {
    onUpdate(todo.id);
}

    return (
        <div className='TodoItem'>
            <input type="checkbox" onChange={onChangeCheckbox} checked={todo.isDone}/>
            <div className='content'>{todo.content}</div>
            <div className='date'>{new Date(todo.date).toLocaleDateString()}</div>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;