import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const AddToDoModal = ({ refetch, setOpenAddModal }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleAddTodo = async () => {
    try {
      const todoData = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        isComplete: false,
      };
      const { data } = await axios.post(`https://arcane-depths-69379.herokuapp.com/todo`, {
        todoData,
      });
      if (data.insertedId) {
        toast.success("Successfully added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        refetch();
        setOpenAddModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input type="checkbox" id="add-modal" className="modal-toggle" />
      <div className="modal">
        <div className=" ">
          <div className="card w-96 bg-accent shadow-xl">
            <div className="card-body">
              <input
                ref={titleRef}
                type="text"
                placeholder="todo name"
                required
                className="input input-bordered w-full max-w-xs"
              />
              <textarea
                ref={descriptionRef}
                className="textarea textarea-bordered h-24"
                placeholder="Description"
              ></textarea>
              <div className="modal-action justify-center">
                <label
                  onClick={handleAddTodo}
                  type="submit"
                  className="btn btn-sm  btn-secondary"
                >
                  Add
                </label>
                <label htmlFor="add-modal" className="btn btn-sm  btn-ghost">
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

export default AddToDoModal;
