import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare  } from "@fortawesome/free-solid-svg-icons";
import { faTrashArrowUp  } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({task,taskInd,toggleCompleted,deleteFunction,editTodo}) => {
    if (taskInd > 2)
       {
        alert('exceeded')
      return 
    }
  return (
    <div className={`${task.completed ?"TodoCompleted":'Todo'}`}>
      <p onClick={()=>toggleCompleted(task.id)} className={`${task.completed?'completed':'incompleted'}`}>{taskInd+1}.&nbsp;{task.task}</p>
      <div className='buttonDive'>
        
        <FontAwesomeIcon onClick={()=>editTodo(task.id)}  className='fa-trash' icon={faPenToSquare}/>
        <FontAwesomeIcon onClick={()=>deleteFunction(task.id)} className='delete-icon' icon={faTrashArrowUp}/>
      </div>
    </div>
  )
}
