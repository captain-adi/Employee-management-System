import React, { useContext } from "react";
import Header from "../Header";
import TaskNumbers from "../TaskNumbers";
import TaskList from "../TaskList";
import { TaskContext } from "../../context/TaskContext";

function EmployeeDashboard() {
  const { userData, failedTask, completedTask, activeTask, tasks } = useContext(TaskContext);
  console.log("tasks : " , tasks)
  return (
    <div className="h-screen background">
      <Header userData={userData} />
      <div className="flex gap-5 mt-8 justify-center  flex-wrap">
        <TaskNumbers
          length={tasks?.length}
          bgColor="bg-gradient-to-tr from-sky-300 to-indigo-400 "
          taskName="NewTask"
          taskNumbers={userData?.data.taskCount?.newTask}
        />
        <TaskNumbers
          bgColor="bg-gradient-to-br from-emerald-300 to-green-700"
          taskName="Active"
          length={activeTask?.length}
          taskNumbers={userData?.data.taskCount?.active}
        />
        <TaskNumbers
          length={completedTask?.length}
          bgColor="bg-gradient-to-tr from-yellow-400/70 to-orange-500"
          taskName="Completed"
          taskNumbers={userData?.data.taskCount?.completedTask}
        />
        <TaskNumbers
          length={failedTask?.length}
          bgColor="bg-gradient-to-bl from-rose-400 to-pink-400"
          taskName="Failed"
          taskNumbers={userData?.data.taskCount?.failed}
        />
      </div>
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
