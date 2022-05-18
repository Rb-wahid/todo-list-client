import React, { useState } from "react";
import AddToDoModal from "./AddToDoModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Todo from "./Todo";
import UpdateTodoModal from "./UpdateTodoModal";

const Home = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const [updateItem, setUpdateItem] = useState({});

  const todos = [
    {
      id: 1,
      title: " Click me to show/hide content",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis.",
    },
    {
      id: 11,
      title: " Click me to show/hide content",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis.",
    },
    {
      id: 111,
      title: " Click me to show/hide content",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis.",
    },
    {
      id: 1111,
      title: " Click me to show/hide content",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis.",
    },
    {
      id: 11111,
      title: " Click me to show/hide content",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis.",
    },
    {
      id: 111111,
      title: " Click me to show/hide content",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis.",
    },
  ];
  return (
    <section className="flex justify-center items-center h-screen">
      <div class="card  w-[600px] bg-accent shadow-xl ">
        <div class="card-body">
          <h2 class="card-title justify-center">TODO LIST</h2>
          {todos.map((todo) => (
            <Todo
              setUpdateItem={setUpdateItem}
              setDeleteItem={setDeleteItem}
              key={todo.id}
              todo={todo}
            />
          ))}
          <div class="card-actions justify-center">
            <label
              onClick={() => setOpenAddModal(true)}
              htmlFor="add-modal"
              class="btn modal-button btn-primary btn-sm mt-2"
            >
              Add todo
            </label>
            {openAddModal && <AddToDoModal setOpenAddModal={setOpenAddModal} />}
            {updateItem && <UpdateTodoModal updateItem={updateItem} />}
            {deleteItem && <ConfirmDeleteModal deleteItem={deleteItem} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
