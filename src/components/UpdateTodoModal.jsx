import React, { useEffect, useState } from "react";

const UpdateTodoModal = ({ updateItem: { title, description } }) => {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");

  useEffect(() => {
    if (title && description);
    setUpdateTitle(title);
    setUpdateDescription(description);
  }, [title, description]);

  console.log(updateTitle, updateDescription);

  return (
    <div>
      <input type="checkbox" id="update-modal" class="modal-toggle" />
      <div class="modal">
        <div class=" ">
          <div class="card w-96 bg-accent shadow-xl">
            <div class="card-body">
              <input
                type="text"
                defaultValue={updateTitle}
                onChange={(e) => setUpdateTitle(e.target.value)}
                required
                class="input input-bordered w-full max-w-xs"
              />
              <textarea
                class="textarea textarea-bordered h-24"
                defaultValue={updateDescription}
                onChange={(e) => setUpdateDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
              <div class="modal-action justify-center">
                <label
                  //   onClick={() => setOpenAddModal(false)}
                  type="submit"
                  class="btn btn-sm  btn-secondary"
                >
                  update
                </label>
                <label htmlFor="update-modal" class="btn btn-sm  btn-ghost">
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
