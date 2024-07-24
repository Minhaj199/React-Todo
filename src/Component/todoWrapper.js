import React,{useState} from 'react'
import { TodoForm } from './todoForm'
import { Todo } from './todo';
import { v4 as uuidv4  } from 'uuid'
import { EditTodoForm } from './editTodoForm';

import { showInfoToast } from "./SweetAlert";
uuidv4();
 const TodoWrapper = () => {
  const [todos,setTodos]=useState([])
   const [track, setTrack] = useState([]);
    const addTodo=todo=>{
      
      
      
        setTrack((prev) => [...prev, todo]);
      setTodos([...todos, {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      }])

      

            
    }
    const checkduplicate=(value)=>{
      if(track.length>3){
        return true
      }
    }
    const toggleCompleted=(id)=>{
      setTodos(todos.map(todo=>todo.id===id ?{...todo,completed:!todo.completed}:todo))
      
     
         
     
    }
    function deleteFunction(id){
      const name=todos.filter(todo=>todo.id===id)
     

      setTrack(track.filter((track) => track !== name[0].task));
      console.log(track)
     setTodos(todos.filter(todo=>todo.id!==id))
     showInfoToast("Task Deleted");
    }
    const editTodo=(id)=>{
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
    } 
    const editTask=(task,id)=>{
      
      
    
      if(checkduplicate(task)){
        
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo,  isEditing: !todo.isEditing }
              : todo
          )
        );
        showInfoToast("Already in the task");
        return
      }
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        )
      );
      
      
    }
    
  return (
    <div className="TodoWrapper">
      <h1>MY TODO</h1>
      <TodoForm addTodo={addTodo} checkduplicate={checkduplicate} />
      {todos.map((todo, index) => {
        return todo.isEditing ? (
          <EditTodoForm task={todo} key={index} editTodo={editTask} />
        ) : (
          <Todo
            task={todo}
            taskInd={index}
            key={index}
            toggleCompleted={toggleCompleted}
            deleteFunction={deleteFunction}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );

}
export default TodoWrapper
