import './List.css'
import TodoItem from './TodoItem';
import {useState} from 'react';

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredTodos = () => {

        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }
    

    return (
        <div className="List">
            <h4>Todo List</h4>
            <input onChange = {onChange} value={search} type="text" placeholder="검색어를 입력하세요"/>
            <div className='todos_wrapper'>
                {filteredTodos().map((todo)=>{
                    return <TodoItem key = {todo.id} onUpdate = {onUpdate} onDelete = {onDelete} todo = {todo}/>
                    // 리스트로 컴퍼넌트를 렌더링할 때에는 각각 컴퍼넌트의 고유한 값인 key를 프롭으로 전달해주어야함 
                })}
            </div>
        </div>
    )
};

export default List;