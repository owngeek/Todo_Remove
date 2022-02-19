import React, { useState } from 'react';
function FileGender(){

    const peoplesData = [
        {id:1,name:'vivek',age:29,gender:'male', all:'all'},
        {id:2,name:'vinduja',age:25,gender:'female', all:'all'},
        {id:3,name:'vaishakh',age:33,gender:'male',all:'all' },
        {id:4,name:'athira',age:33,gender:'female',all:'all'},
        {id:5,name:'achu',age:33,gender:'female',all:'all'},
        {id:6,name:'avni',age:33,gender:'female',all:'all'}];

    const [gender, setGender] = useState('all');
    const [peoples,setPeoples] = useState(peoplesData);


    const handleFilterClick = (e) =>{
        setGender(e.target.value); 
        if(e.target.value == 'all'){
            setPeoples(peoplesData);
        }else{
            setPeoples(peoplesData.filter(p => p.gender == e.target.value));
        }
        
    }

    const getBgColor = (who) => {
        return who == gender ? '#e3d627' : '#d1d1d1';
    }

    return(
        <div>
            <div style={{marginBottom:'20px'}}>
                <button style={{background:getBgColor('male')}} value="male" onClick={handleFilterClick}>Male</button>
                <button style={{marginLeft:'10px', marginRight:'10px', background: getBgColor('female')}} value='female' onClick={handleFilterClick}>Female</button>
                <button style={{background:getBgColor('all')}} value='all' onClick={handleFilterClick}>All</button>
            </div>
            {peoples.map((person)=>(<div style={{border:'1px solid #dddddd',marginBottom:'10px',padding:'10px'}} key={person.id}>{person.name}</div>))}
        </div>
    );

}
export default FileGender;