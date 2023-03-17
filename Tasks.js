import React from "react";
import "./AddTaskForm.css"
const Tasks = (props) =>{
    let id = 1000 ;
    const getKey = ()=>{
        id++ ; 
        return id ;
    }
    return (
        <ul className="form">
            {props.data.map((oneTask)=>{
                return (<li key={getKey()}>{oneTask.title}</li>)
            })}
        </ul>
    )
}

export default Tasks ; 