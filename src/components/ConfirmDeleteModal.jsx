import React from "react";

const ConfirmDeleteModal = ({ deleteItem }) => {
  console.log(deleteItem);
  return (
    <div>

      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal">
        <div class=" ">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title text-warning">Are you sure?</h2>
              <p className=" text-gray-50">You can't undo after delete.</p>
              <div class="modal-action">
                <label class="btn btn-sm bg-red-700 hover:bg-red-700 hover:border-red-700 text-gray-50">
                  Delete
                </label>
                <label for="delete-modal" class="btn btn-sm  btn-secondary">
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
