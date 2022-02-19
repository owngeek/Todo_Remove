
import { useState } from 'react';
import './App.css';
import Remove from './remove';


export default function App (){



const [todo, setTodo] = useState("");
const [todos,setTodos] = useState([])




//const handleSubmit =(e)=>{
//e.preventDefault()
//setTodos([...todos,{id:Date.now(),text: todo, status:false}])



//}


return(
<div>
  <form>
<input value={todo} onChange={(e)=>{setTodo(e.target.value)}} type="text"></input>
<button onClick={(e)=>{e.preventDefault(); setTodos([...todos,{id:Date.now(),text:todo,status:false,}])}} disabled={todo === ""}>Add</button>


{
todos.map((obj,index)=>{

  
  return(
    <div key={index}>
      <div className="box" >
<input  value={obj.status} type ="checkbox" id="" onChange={(e)=>{
  setTodos(todos.filter((obj2)=>{
    if(obj2.id === obj.id){
obj2.status = e.target.checked

    }
    return(
      obj2
    )
  }))
}}/>
      <h1>{obj.text}</h1>
      <button  onClick={()=>setTodos(todos.filter((obj2)=>obj2.id!==obj.id))}  disabled={!obj.status} className='close_btn'>close</button>
</div>
{console.log(obj.status)}
    </div>
  )
})

}


</form>



<div className='box2'>
  {todos.map((obj,index)=>{
  
if(obj.status ){
  return(
   
<h3 key={index}>{obj.text}</h3>

)
}

  })}
</div>


<Remove/>





</div>
)
}

