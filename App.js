import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm";
import { useState } from "react";
import Tasks from "./Components/Tasks";

function App() {
  const [AllTask, setTask] = useState([
    { title: "Send File-A to perosn-a" },
    { title: "mail to manager for salary hike" },
  ]);

  const NewTaskHandler = (task)=>{
    setTask((ExistingTasks)=>{
      return [task, ...ExistingTasks]
    })
  }
  return (
    <div className="App">
      {console.log(AllTask)}
      <h3>To Do App</h3>
      <AddTaskForm onSubmit={NewTaskHandler} />
      <Tasks data={AllTask}/>
    </div>
  );
}

export default App;
