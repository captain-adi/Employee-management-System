import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function FailedTask() {
  const { failedTask } = useContext(TaskContext);
  return (
    <>
      {failedTask.map((taskDetails,index) => {
        return (
          <div className="flex gap-6 h-[90%]" key={index}>
            <div className="bg-gradient-to-bl from-rose-400 to-pink-400 h-full w-[350px] rounded-3xl flex-shrink-0 p-7">
              <div className="flex justify-between ">
                <h3 className="bg-red-500 px-3 rounded-sm p-1">
                  {taskDetails.cetogery}
                </h3>
                <h4>{taskDetails.date}</h4>
              </div>
              <h2 className="text-2xl font-bold mt-6">{taskDetails.title} </h2>
              <p>{taskDetails.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FailedTask;
