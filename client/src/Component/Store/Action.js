import axios from "axios";

export const GetList = async () => {
  let response = await axios.get("http://192.168.11.141:5000/api/todos/getAllTodos", {
    
  });
  return response.data.data;
};

export const Todelete = async (id) => {
  await axios
    .delete(`http://192.168.11.141:5000/api/todos/deleteTodo/${id}`, {
    })
    .then((response) => {
      console.log("res", response);
    })
    .catch((err) => console.log("err", err.message));
};
export const ToEdit = async ({ edititem, newTaskData }) => {
  const response = await axios.post(
    "http://192.168.11.141:5000/api/todos/updateTodo",
    newTaskData
  );
};

export const ToAddNewTask = async ({ newTaskData }) => {
  const response = await axios.post(
    "http://192.168.11.141:5000/api/todos/createTodo",
    newTaskData
  );
};
