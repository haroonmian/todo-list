import React, { useEffect, useState } from "react";
import "./Style.css";

import * as action from "../Store/Action";

const List = ({fetchTodo}) => {
  const [data, setdata] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      mydata();
    },500)
  }, [fetchTodo]);

  const deleteitem = async (id) => {
    await action.Todelete(id);
    mydata()  
  };

  const mydata = async () => {
    const test = await action.GetList();
    setdata(test);
  };
  const edit = async (index) => {
    let edititem = data.find((element) => {
      return element.id === index;
    });
    let editvalue = prompt("Please enter your name", edititem.text);
    
    let newTaskData = {
      text: editvalue,
      id: index
    };

    await action.ToEdit(
      (newTaskData = { newTaskData })
    );
    return mydata();
  };

  // const postDataHandler = () => {
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/posts", {
  //       body: JSON.stringify({
  //         title: "afaq",
  //         body: "brainz",
  //         userId: 10000111,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //     .then((response) => console.log("res....", response));
  // };

  // const getDataHandler = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => console.log(response.data));
  // };
  return (
    <>
      <hr />
      <figure>
        <figcaption> your List Here </figcaption>
      </figure>

      {!Loading ? (
        <div className="showItem text-white">
          {data?.map((items) => {
            return (
              <div className="eachItem" key={items.id}>
                <h1>{items.text}</h1>
                <div className="todo-btn">
                  <i
                    className="far fa-edit add-btn"
                    onClick={() => edit(items.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  ></i>
                  <i
                    className="far fa-trash-alt add-btn"
                    onClick={() => deleteitem(items.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="loading">
          <h1>loading</h1>
        </div>
      )}

      {/* <button className="btn" onClick={postDataHandler}>
        postdata
      </button>

      <button className="btn" onClick={getDataHandler}>
        getdata
      </button> */}
    </>
  );
};

export default List;
