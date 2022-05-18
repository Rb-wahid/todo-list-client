import React from "react";

const AddToDoModal = ({ setOpenAddModal }) => {
  return (
    <div>
      <input type="checkbox" id="add-modal" class="modal-toggle" />
      <div class="modal">
        <div class=" ">
          <div class="card w-96 bg-accent shadow-xl">
            <div class="card-body">
              <input
                type="text"
                placeholder="todo name"
                required
                class="input input-bordered w-full max-w-xs"
              />
              <textarea
                class="textarea textarea-bordered h-24"
                placeholder="Description"
              ></textarea>
              <div class="modal-action justify-center">
                <label
                  //   onClick={() => setOpenAddModal(false)}
                  type="submit"
                  class="btn btn-sm  btn-secondary"
                >
                  Add
                </label>
                <label
                  htmlFor="add-modal"
                  class="btn btn-sm  btn-ghost"
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

export default AddToDoModal;
