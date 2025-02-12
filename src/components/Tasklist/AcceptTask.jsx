import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function AcceptTask() {
  const { activeTask, setCompletedTask, setFailedTask, setActiveTask } =
    useContext(TaskContext);

  return (
    <>
      {activeTask.map((task, index) => {
        return (
          <div key={index} className="h-[90%]">
            <div className="bg-gradient-to-br from-emerald-300 to-green-700 h-full w-[350px] flex flex-col rounded-3xl flex-shrink-0 p-7 justify-between">
              <div className="flex justify-between flex-col ">
                <div className="flex justify-between ">
                  <h3 className="bg-red-500 px-3 rounded-sm p-1">
                    {task.cetogery}
                  </h3>
                  <h4>{task.date}</h4>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-6">{task.title} </h2>
                  <p>{task.description}</p>
                </div>
              </div>
              <div className="flex justify-between mt-4  items-center">
                <button
                  type="button"
                  className="blueButton"
                  onClick={(e) => {
                    setCompletedTask((prevTasks) => [...prevTasks, task]);
                    setActiveTask(activeTask.filter((t) => t !== task));
                  }}
                >
                  Completed
                </button>
                <button
                  type="button"
                  className="redButton"
                  onClick={(e) => {
                    setFailedTask((prevTasks) => [...prevTasks, task]);
                    setActiveTask(activeTask.filter((t) => t !== task));
                  }}
                >
                  Faild
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AcceptTask;
