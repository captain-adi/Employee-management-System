import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function NewTask() {
  const { setActiveTask, tasks, setTasks } = useContext(TaskContext);

  return (
    <>
      {tasks.map((task, index) => {
        return (
          <>
            <div key={index} className="h-[90%]  ">
              <div className="bg-gradient-to-tr flex flex-col from-sky-300 to-indigo-400  h-full w-[350px] rounded-3xl flex-shrink-0 p-7 justify-between">
                <div className="flex justify-between flex-col">
                  <div className="flex justify-between">
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
                <div className="flex justify-between items-center mt-4 s">
                  <button
                    type="button"
                    className="blueButton"
                    onClick={() => {
                      setActiveTask((prevTasks) => [...prevTasks, task]);
                      setTasks(tasks.filter((t) => t !== task));
                      localStorage.setItem("tasks", JSON.stringify(tasks));
                    }}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="redButton"
                    onClick={() => {
                      setTasks(tasks.filter((t) => t !== task)); // Remove from tasks
                    }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default NewTask;
