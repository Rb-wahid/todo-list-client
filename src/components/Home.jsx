import React, { useState } from "react";
import useFetch from "../useFetch";
import AddToDoModal from "./AddToDoModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Todo from "./Todo";
import UpdateTodoModal from "./UpdateTodoModal";

const Home = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const [updateItem, setUpdateItem] = useState({});
  const { data: todos = [], refetch } = useFetch(
    ["todo"],
    "https://arcane-depths-69379.herokuapp.com/todo"
  );

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="card  w-[600px] bg-accent shadow-xl ">
        <div className="card-body">
          <h2 className="card-title justify-center">TODO LIST</h2>
          {todos.map((todo) => (
            <Todo
              setUpdateItem={setUpdateItem}
              setDeleteItem={setDeleteItem}
              key={todo._id}
              todo={todo}
              refetch={refetch}
            />
          ))}
          <div className="card-actions justify-center">
            <label
              onClick={() => setOpenAddModal(true)}
              htmlFor="add-modal"
              className="btn modal-button btn-primary btn-sm mt-2"
            >
              Add todo
            </label>
            {openAddModal && (
              <AddToDoModal
                refetch={refetch}
                setOpenAddModal={setOpenAddModal}
              />
            )}
            {Object.keys(updateItem).length !== 0 && (
              <UpdateTodoModal
                refetch={refetch}
                updateItem={updateItem}
                setUpdateItem={setUpdateItem}
              />
            )}
            {Object.keys(deleteItem).length !== 0 && (
              <ConfirmDeleteModal
                refetch={refetch}
                setDeleteItem={setDeleteItem}
                deleteItem={deleteItem}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
