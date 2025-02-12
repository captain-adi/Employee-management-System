import React, { useContext } from "react";
import AcceptTask from "./Tasklist/AcceptTask";
import CompleteTask from "./Tasklist/CompleteTask";
import FailedTask from "./Tasklist/FailedTask";
import NewTask from "./Tasklist/NewTask";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { showTaskList } = useContext(TaskContext);
  return (
    <div
      id="tasklist"
      className="h-[55%] px-2  overflow-x-auto w-full mt-10 flex items-center gap-10 flex-nowra"
    >
      {showTaskList === "NewTask" ? (
        <NewTask />
      ) : showTaskList === "Active" ? (
        <AcceptTask />
      ) : showTaskList === "Completed" ? (
        <CompleteTask />
    
      ) : showTaskList === "Failed" ? (
        <FailedTask />
      ) : (
        ""
      )}
    </div>
  );  
}

export default TaskList;
