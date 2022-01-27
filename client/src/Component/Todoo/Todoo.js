import React, { useState } from "react";
import "./Style.css";
import * as action from "../Store/Action";
const Todoo = ({ fetchTodoList }) => {
  const [taskName, setTaskName] = useState("");


  const AddTask = async () => {
    let newTaskData = {
      text: taskName,
    };
    await action.ToAddNewTask((newTaskData = { newTaskData }));
    // return toupdate();
  };

  const AddTaskHandler = async (e) => {
    e.preventDefault();
    AddTask();
    fetchTodoList();
    setTaskName("");
  };

  return (
    <>
      <div className="addItems">
        <form onSubmit={AddTaskHandler}>
          <div>
            <input
              type="text"
              placeholder="✍ Add Items"
              value={taskName}
              required
              className="form-control d-block"
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
         
          <button type="submit" className="btn">
            Add to List &nbsp;
            {/* <i className="fa fa-plus add-btn" s /> */}
          </button>
        </form>
        {/* {toogle ? (
          ) : (
          <i className="far fa-edit add-btn" onClick={AddTaskHandler}></i>
        )} */}
      </div>

      {/* </div>
      </div> */}
    </>
  );
};

export default Todoo;
