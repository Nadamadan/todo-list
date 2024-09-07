import {useState} from 'react';
import './index.css';
let nextId=5;

export function AddDeleteItems() {

    const[deviceInputValue,setDeviceInputValue]=useState("") // state of input in form
    const[devices,setDevice]=useState([  // devices contains all elements in array , setDevice function edit the array
      {id:1,name:"Do my tasks"},
      {id:2,name:"Go to university"},
      {id:3,name:"Wash my clothes"},
      {id:4,name:"Sleep not late"},
    ]) // state of add new element or delete element 
      
    // to display elements
   const devicelist=devices.map((device)=>{
    return(
      
    <div className=' text-gray-300 bg-gradient-to-r from-cyan-500 to-blue-500 w-[600px] h-[100px] relative left-[560px] pt-6 border-solid border-2 border-gray-200'>
     <div key={device.id}>
      {device.name}
         
       <button className="text-gray-200 ml-12 pl-16 pr-14 bg-cyan-500 " onClick={()=>
        {handleDelete(device.id); // i send to function (handle delete) the id of element i want to delete
        }}>Delete</button>
      </div>

    </div>)
   
   });
  
   // to delete element
  function handleDelete(id){
  const newDevice =devices.filter((device)=>{ // return all element to display expect  the element i want delete
    return device.id!==id
  });
  setDevice(newDevice); // edit the array
  }
  
  // function to add new element
   function handleClick(){
   //const newDevice=[...devices]; // stay all old element in new add
   //newDevice.push(deviceInputValue); // add the new element when i enter it in form 
   //setDevice(newDevice); // add new element to the array
   setDevice([...devices,{id:nextId,name:deviceInputValue}]); // stay all old element and add new one with id and name
   nextId=nextId+1;
   }
  
    return (
      <div style={{marginTop:"100px",fontSize:"30px"}}>
     
       {devicelist}
  
       <div className='bg-slate-400/75 w-[600px] h-[100px] relative left-[560px] border-solid border-2 border-gray-200'>
        <input className='h-12 w-[380px] mt-6 border-solid border-2 border-gray-200 rounded-3xl pl-3' 
        placeholder=' Enter your task'
        value={deviceInputValue} onChange={(event)=>{setDeviceInputValue(event.target.value)}} // here i enter name in form this name save in setDevicesValue
         type='text'/> 
        <button className=' bg-cyan-500 ml-8 pl-5 pr-5 text-gray-200'  onClick={handleClick}>Add</button>
       </div>
      </div>
    );
  }










