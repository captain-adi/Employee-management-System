import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskNumbers({ bgColor, taskName, taskNumbers,length }) {
  const { setShowTaskList } = useContext(TaskContext);
  return (
    <div
      className={`flex min-w-48 ${bgColor} h-48 w-[24%] items-center justify-center rounded-xl cursor-pointer`}
      onClick={() => {
        setShowTaskList(taskName);
      }}
    >
      <div className="font-extrabold flex flex-col items-center">
        <span className="text-5xl font-normal">{length }</span>
        <span className="text-3xl font-normal">{taskName}</span>
      </div>
    </div>
  );
}

export default TaskNumbers;
