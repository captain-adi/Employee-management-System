import React from 'react';
import { createContext, useEffect, useState } from "react";
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  // const [loggedInUserData, setLoggedInUserData] = useState("");
  const userData = JSON.parse(localStorage.getItem("loggedInUser"));
  const [showTaskList, setShowTaskList] = useState("NewTask");
  const [taskData, setTaskData] = useState([]);
  const [activeTask, setActiveTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [failedTask, setFailedTask] = useState([]);
  const allTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState();
  useEffect(()=>{
    setTasks(allTasks);
  },[])


  return (
    <TaskContext.Provider
      value={{
        userData,
        setShowTaskList,
        showTaskList,
        setTaskData,
        taskData,
        setActiveTask,
        activeTask,
        setCompletedTask,
        completedTask,
        setFailedTask,
        failedTask,
        tasks, // local storage data 
        setTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
