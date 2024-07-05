import React from 'react'
import DataItems from './dataItems'
import './datasection.scss'

function Datasection(props) {

    const updateTask1=(obj)=>{
        props.sendToApp(obj)
    }
    const removeTask1=(obj)=>{
      props.sendToAppforDel(obj)
  }

  return (
    <div className='data-div'>
    <ul>
        
        {props.data.map((item)=>(
              <DataItems id={item.id} data={item.data} status={item.status} sendToSection={updateTask1} sendToDel={removeTask1} />
        ))}
        
    </ul>
    </div>
  )
}

export default Datasection