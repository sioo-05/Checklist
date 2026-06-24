import './App.css'
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import {useState, useRef} from 'react';

const mockData = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      date: new Date().getTime(),
    },
];


function App() {


  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(1);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo)=> 
      todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo))
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos = {todos} onUpdate = {onUpdate}/>
    </div>
  )
}

export default App;
