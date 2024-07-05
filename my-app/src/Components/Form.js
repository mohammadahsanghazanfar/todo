import React,{useRef,useState,useEffect} from 'react'
import './Form.scss'

function Form1(props) {
  
    const myRef = useRef(null);
    const [nextId, setNextId] = useState(1);
    const [count,setCounter]=useState(false)

      
    useEffect(() => {
        if (props.placeholder !== null) {
            setCounter(true);
        } 
             
      
    }, [props.placeholder]);

    console.log(props.placeholder)
     const addTask=()=>{
          const obj={
            id:nextId,
            data:myRef.current.value,
            status:'Todo'
          }
  
          props.sendToParent(obj)
          setNextId(nextId + 1);

          myRef.current.value = '';
          alert("send successfully")
      
     }

     const formUpdate=(obj)=>{
       
      const obj1={
        id:props.obj.id,
        data:myRef.current.value,
        status:"Completed"
      }

      props.update(obj1)
      setCounter(false)
      props.Place(); 
      myRef.current.value = '';


     }

     
sdcddsdsdsc

  return (
    <div className='form-div'>

   <input type='text' ref={myRef} placeholder={props.placeholder}/>
  { !count && <button onClick={addTask}>
    Add Task
   </button>}
   { count && <button onClick={formUpdate}>
    Update
   </button>}
 

    </div>
  )
}

export default Form1