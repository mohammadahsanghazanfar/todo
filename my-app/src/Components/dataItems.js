import React from 'react'
import './dataItems.scss'

function DataItems(props) {

  
    const updateTask=(e)=>{
            e.preventDefault();

            const obj={
              id:props.id,
              data:props.data,
              status:props.status
            }
            props.sendToSection(obj)
    }
    const removeTask=(e)=>{
      e.preventDefault();

      const obj={
        id:props.id,
        data:props.data,
        status:props.status
      }
      props.sendToDel(obj)
}
   

  return (
    <li className='list'>
    <div className='dataitems-div'>

       <h3>{props.data}</h3>
       <button className='btn' onClick={updateTask}>
           <span>Update</span> 
        </button>
        <button className='btn-1' onClick={removeTask}>
          <span>Remove </span>  
        </button>

    </div>
    <p>status : {props.status} </p>
    <div className='line'></div>
    <hr></hr>
    </li>
    
  )
}

export default DataItems