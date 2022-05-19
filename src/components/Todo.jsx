import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrTrash, GrUpdate } from "react-icons/gr";
import { toast } from "react-toastify";

const Todo = ({ setUpdateItem, setDeleteItem, todo, refetch }) => {
  const { _id, title, description, isComplete } = todo;
  const [click, setClick] = useState(isComplete);

  const handleClick = async () => {
    const { data } = await axios.put(
      "https://arcane-depths-69379.herokuapp.com/todo",
      {
        id: _id,
        isComplete: !click,
      }
    );
    if (data.matchedCount) {
      refetch();
    }
    if (!click) {
      toast.success("Task Completed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setClick(!click);
  };
  return (
    <div className="flex items-center">
      <input
        onClick={handleClick}
        type="checkbox"
        checked={isComplete}
        className="checkbox mr-3 border border-base-300 bg-base-100 rounded-box"
      />
      <div className="collapse w-96 border border-base-300 bg-base-100 rounded-box ">
        <input type="checkbox" />
        <div
          className={`collapse-title text-xl font-medium ${
            isComplete ? "line-through" : ""
          }`}
        >
          {title}
        </div>
        <div className="collapse-content ">
          <p>{description}</p>
        </div>
      </div>
      <div className="flex ml-3 gap-x-3 ">
        <label
          onClick={() => setUpdateItem(todo)}
          htmlFor="update-modal"
          className="btn btn-circle btn-outline btn-warning"
        >
          <GrUpdate />
        </label>
        <label
          onClick={() => setDeleteItem(todo)}
          htmlFor="delete-modal"
          className="btn modal-button btn-circle  btn-outline text-red-700 hover:bg-red-700 hover:border-red-700 "
        >
          <GrTrash />
        </label>
      </div>
    </div>
  );
};

export default Todo;
