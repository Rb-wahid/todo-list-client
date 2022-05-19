import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ConfirmDeleteModal = ({ setDeleteItem, refetch, deleteItem }) => {
  const handleDeleteTodo = async () => {
    try {
      const { data } = await axios.delete(
        `https://arcane-depths-69379.herokuapp.com/todo/${deleteItem._id}`
      );

      if (data.deletedCount) {
        toast.success("Successfully deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        refetch();
        setDeleteItem({});
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className=" ">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-warning">Are you sure?</h2>
              <p className=" text-gray-50">You can't undo after delete.</p>
              <div className="modal-action">
                <label
                  onClick={handleDeleteTodo}
                  className="btn btn-sm bg-red-700 hover:bg-red-700 hover:border-red-700 text-gray-50"
                >
                  Delete
                </label>
                <label
                  htmlFor="delete-modal"
                  className="btn btn-sm  btn-secondary"
                >
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

export default ConfirmDeleteModal;
