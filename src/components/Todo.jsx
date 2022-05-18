import React, { useState } from "react";
import { GrTrash, GrUpdate } from "react-icons/gr";

const Todo = ({ setUpdateItem, setDeleteItem, todo }) => {
  const [click, setClick] = useState(false);
  const { id, title, description } = todo;
  return (
    <div className="flex items-center">
      <input
        onClick={() => {
          setClick(!click);
          console.log(id);
        }}
        type="checkbox"
        checked={click}
        className="checkbox mr-3 border border-base-300 bg-base-100 rounded-box"
      />
      <div class="collapse border border-base-300 bg-base-100 rounded-box ">
        <input className="" type="checkbox" />
        <div
          className={`collapse-title text-xl font-medium ${
            click ? "line-through" : ""
          }`}
        >
          {title}
        </div>
        <div class="collapse-content ">
          <p>{description}</p>
        </div>
      </div>
      <div className="flex ml-3 gap-x-3 ">
        <label
          onClick={() => setUpdateItem(todo)}
          for="update-modal"
          class="btn btn-circle btn-outline btn-warning"
        >
          <GrUpdate />
        </label>
        <label
          onClick={() => setDeleteItem(todo)}
          for="delete-modal"
          class="btn modal-button btn-circle  btn-outline text-red-700 hover:bg-red-700 hover:border-red-700 "
        >
          <GrTrash />
        </label>
      </div>
    </div>
  );
};

export default Todo;
