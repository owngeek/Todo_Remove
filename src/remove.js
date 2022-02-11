import React, { useState } from 'react';
 



//const handleDelete =(id)=>{
  // survey.filter((obj2)=>{obj2.id!==id}) 
//}


function Remove() {
  const survey=[
    {id:1,name:'vivek',age:29},
    {id:2,name:'vinduja',age:25},
    {id:3,name:'vaishakh',age:33}
]
const [first, setFirst] = useState([...survey])

const [remove, setRemove] = useState(first)
const [deletedItem,setDeletedItem] = useState([])


const handleDelete = (obj) => {
 const data = remove.filter((obj2)=>obj2.id !== obj.id)
 const data1 = remove.filter((obj2)=>obj2.id === obj.id)
setRemove(data)
setDeletedItem(data1)


console.log(deletedItem)
  
}




//const handleDelete = (obj) =>{
//const data =remove.filter((obj2)=>obj2.id !== obj.id)

///console.log('i am clicking')
//}


//console.log(remove)

//<button onClick={()=>{setRemove(remove.filter((obj2)=>obj2.id !== obj.id ))}}>close</button>


  return <div>
      {first.map((obj,index)=>(  
<div key={index}>
<h3>{obj.id}</h3>
<h3>{obj.name}</h3>
<h3>{obj.age}</h3>



</div>



      ))}


<h1>Remove Items</h1 >


  {remove.map((obj,index)=>(  
<div key={index}>
<h3>{obj.id}</h3>
<h3>{obj.name}</h3>
<h3>{obj.age}</h3>

<button onClick={()=>handleDelete(obj)}>close</button>
</div>

      ))}





<h1>Deleted Items</h1 >


  {deletedItem.map((obj,index)=>(  
<div key={index}>
<h3>{obj.id}</h3>
<h3>{obj.name}</h3>
<h3>{obj.age}</h3>



</div>

      ))}


  </div>;
}











export default Remove;
