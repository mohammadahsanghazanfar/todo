import React, { useEffect, useState } from 'react';
import Navbar from './Components/navbar';
import Form1 from './Components/Form';
import Datasection from './Components/datasection';

function App() {
    
    const [items, setItems] = useState([]);
    const [placeholder,setPlaceHoolder]=useState(null)
    const [object,setObject]=useState({})

    const addTask2 = (obj) => {
        const found = items.find(item => item.id === obj.id);
        if (!found) {
            const newArray = items.concat(obj);
            setItems(newArray);
        } else {
            alert("Duplicate Id found");
        }
    };

    const updatedTask2 = (obj) => {
        const updatedItems = items.map((item) => {
            if (item.id === obj.id) {
                // Assuming setPlaceHoolder and setObject are functions to update state
                setPlaceHoolder(obj.data);
                setObject(obj);
    
                if (item.status === "Todo") {
                    return { ...item, status: "InProgress" };
                } else if (item.status === "InProgress") {
                    return { ...item, status: "Completed" };
                } else if (item.status === "Completed") {
                    return{...item,status:"Inprogress"}
                }
            }
            return item;
        });
    
        setItems(updatedItems);
    };
    

    const removeTask2=(obj)=>{

          let i=0;
          while(i<items.length){
            if(items[i].id===obj.id){
               let sl=items.slice(0,i).concat(items.slice(i+1))
                setItems(sl)
                break
            }
            i++
          }

    }

    /*const removeTask2 = (obj) => {
    const updatedItems = items.filter(item => item.id !== obj.id || item.status !== "Completed");
    setItems(updatedItems);
};*/


   const Updateform=(obj)=>{
    const updatedItems = items.map((item) => {
        if (item.id === obj.id) {
                return { ...item, data: obj.data ,status:obj.status}; 
            } 
        
        return item;
    });
    setItems(updatedItems);
   }
   const changeplaceholder=()=>{
         setPlaceHoolder(null)
   }

    return (
        <div>
            <Navbar/>
            <Form1 sendToParent={addTask2} placeholder={placeholder} obj={object} update={Updateform} Place={changeplaceholder}/>
            <Datasection data={items} sendToApp={updatedTask2} sendToAppforDel={removeTask2} />
        </div>
    );
}

export default App;
