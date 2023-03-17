import React, { useState } from "react";
import "./AddTaskForm.css"

const AddTaskForm = (props) => {
  const [EnteredTask , setNewTask] = useState("")

  const [DisableButton , setDisableButton] = useState(true)

  const InputHandler = (e)=>{
    {e.target.value === "" && setDisableButton(true) }
    {e.target.value !=="" && setDisableButton(false)}
    setNewTask(e.target.value)
  }

  let newTask = {title:EnteredTask}

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(newTask);
    setNewTask("");
    setDisableButton(true)
  };

  

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div>
          <label htmlFor="add-task">Add Task</label>
          <input type="text" id="add-task" value={EnteredTask} onChange={InputHandler} required></input>
        </div>
        <div>
          <button type="submit" className="button" disabled={DisableButton}>Add Goal</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
