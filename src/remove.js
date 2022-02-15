import React, { useState } from 'react';
 



//const handleDelete =(id)=>{
  // survey.filter((obj2)=>{obj2.id!==id}) 
//}


function Remove() {
  const survey=[
    {id:1,name:'vivek',age:29,gender:'male', all:'all'},
    {id:2,name:'vinduja',age:25,gender:'female', all:'all'},
    {id:3,name:'vaishakh',age:33,gender:'male',all:'all' },
    {id:4,name:'athira',age:33,gender:'female',all:'all'},
    {id:5,name:'achu',age:33,gender:'female',all:'all'},
    {id:6,name:'avni',age:33,gender:'female',all:'all'}

]
const [first, setFirst] = useState([...survey])

const [remove, setRemove] = useState(first)
const [deletedItem,setDeletedItem] = useState([])


const handleDelete = (obj) => {
 const data = remove.filter((obj2)=>obj2.id !== obj.id)
 const data1 = remove.filter((obj2)=>obj2.id === obj.id)
setRemove(data)
setDeletedItem([...deletedItem,data1[0]])


console.log(deletedItem)
  
}


//gender_button_start//

const [gender,setGender] =useState('')
const [malearray,setMaleArray] =useState([])
//const [female,setFemale] =useState()
//const [all,setAll] = useState()

//const handleAll =()=>{
  //setGender(all)
//const all = first.filter((obj)=>obj.all = all)
//if (gender = all) {
////setAll(all)
//}
//}
console.log(gender)

const handleMale = () =>{
  setGender('male')
 
  setMaleArray( first.filter((obj)=>{obj.gender = gender

 
  console.log([malearray])


})


)}




//const handleMale =()=>{
 // setGender(male)
//  console.log(gender)
  //console.log("clicked")
 // const male1 = first.filter((obj)=>obj.gender = 'male')
 // console.log(male1)
 
//if(gender=male){
  //setMale([...male1,male1(0)])
//}
//}

//const handleFemale =()=>{
 // const female = first.filter((obj)=>obj.gender = female)
 // if(gender=female){
 //   setFemale(female)
  //}
//}
//gender_button_end//


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



<button onClick={handleMale}>Male</button>




<h1>in the case of gender is all</h1 >


  {//male.map((obj,index)=>(
//<div key={index}>
//<h3>{obj.id}</h3>
//<h3>{obj.name}</h3>
//<h3>{obj.age}</h3>
//<h3>{obj.gender}</h3>

//</div>


//))
}












  </div>;
}


export default Remove;
