import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateTodoModal = ({
  refetch,
  setUpdateItem,
  updateItem: { _id, title, description },
}) => {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  useEffect(() => {
    if (title && description);
    setUpdateTitle(title);
    setUpdateDescription(description);
  }, [title, description]);

  const handleUpdateTodo = async () => {
    try {
      const todoData = {
        id: _id,
        title: updateTitle,
        description: updateDescription,
        isComplete: false,
      };
      const { data } = await axios.put(`http://localhost:5000/todo/update`, {
        todoData,
      });
      if (data.modifiedCount) {
        refetch();
        setUpdateItem({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className=" ">
          <div className="card w-96 bg-accent shadow-xl">
            <div className="card-body">
              <input
                type="text"
                defaultValue={updateTitle}
                onChange={(e) => setUpdateTitle(e.target.value)}
                required
                className="input input-bordered w-full max-w-xs"
              />
              <textarea
                className="textarea textarea-bordered h-24"
                defaultValue={updateDescription}
                onChange={(e) => setUpdateDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
              <div className="modal-action justify-center">
                <label
                  onClick={handleUpdateTodo}
                  type="submit"
                  className="btn btn-sm  btn-secondary"
                >
                  update
                </label>
                <label htmlFor="update-modal" className="btn btn-sm  btn-ghost">
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodoModal;
