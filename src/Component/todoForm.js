import  {React,useState,useEffect} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import  {showWarningToast,showSuccessToast}  from './SweetAlert';
import './toastCSS.css'
export const TodoForm = ({addTodo,checkduplicate}) => {
  
  const [value,setValue]=useState('')
  const [toastId,setTost]=useState(null)
  const [track,setTrack]=useState([])
 
  useEffect(()=>{
    if(toastId){
      toast.dismiss()
    }
  },[value])
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    try{
      if(value.trim()===''){
       const id= showWarningToast('Black Space Not Allowed')
        setTost(id)
        
    }else if(checkduplicate(value)){
      showWarningToast('Already in the Task')
    }
    else{
      setTrack((values)=>[...values,value])
      console.log(track)
      addTodo(value)
      setValue('')
      showSuccessToast('Added')
     
    }
    }catch(err){
      console.log(err)
    }
    
    
  }
  
  return (
    <>
    
    <form className="TodoForm" onSubmit={handleSubmit}>
    <input name='addTodo' value={value} onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='Enter Your Task' type="text" />
    <button type='submit' className='todo-btn'>ADD TASK</button>
  </form>
  <ToastContainer/>
    </>
 )
}
