import { useState , useRef} from "react"
import Todolist from "./components/Todolist";

function App() {

interface Todo {
  textValue: string;
  id:number | string;
  isDone: boolean;
}

const [todo ,setTodo]= useState<Todo[]>([]);
const inputRef = useRef<HTMLInputElement>(null); 
   
  function addtodo(){
    setTodo(prev=>[...prev , {
        textValue: inputRef.current?.value || '',
        id: Date.now(),
        isDone: false,
      }
    ])
  }


  function deleteTodo(id : number|string){
     setTodo(prev => prev.filter(todo=>{
          return todo.id !== id 
          })
     )
  };

function updateTodo(id : number|string){
  const newData = prompt() ?? "";
   
  setTodo(prev=>{
    return prev.map(obj=>{
     if(obj.id === id){
      obj.textValue = typeof newData === "string" ? newData : "";
     }
    return obj
   })
  })
}
  
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
                          
      <div className="flex flex-col gap-2 w-1/2 text-2xl border-s-white " >
          <div className="flex ">
              <input ref={inputRef} type="text" className="w-full"/>
              <button onClick={addtodo} className="bg-gray-600 text-white px-2 mx-2 rounded-xl">Add</button>
          </div>
          <div className="flex flex-col">
              {
              todo.map((obj) =>{
                  return <Todolist 
                      value={obj.textValue} 
                      id ={obj.id} 
                      key ={obj.id}
                      status={obj.isDone}
                      deleteTodo = {deleteTodo}
                      updateTodo = {updateTodo}/>
             })
            } 
          </div>
      </div>
       
    </div>
  )

}

export default App
