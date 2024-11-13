import React from "react"

interface Todoprops{
   value : string,
   id : number | string,
   key : number | string,
   status : boolean,
   deleteTodo : (id:number|string)=>void,
   updateTodo : (id:number|string)=>void,
}


const Todolist: React.FC<Todoprops> = ({value , id ,key, deleteTodo, updateTodo}) => {

  return (
    <div className='w-full flex gap-2 rounded-xl my-2'>
        <input type='text' value={value} key={key} readOnly className="w-3/4 rounded "/>
        <button 
          className="gap-2 px-2 rounded-xl bg-gray-600"
          onClick={()=>{updateTodo(id)}}> 
            Update 
        </button>
        <button 
          className="gap-2 px-2 rounded-xl bg-gray-600" 
          onClick={()=>{deleteTodo(id)}}> 
            Delete
        </button>
    </div> 
  )
};

export default Todolist
