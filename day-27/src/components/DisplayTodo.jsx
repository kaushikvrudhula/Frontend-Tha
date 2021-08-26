import {useDispatch , useSelector } from "react-redux";

import { updateTodo,removeTodo,editTodo } from "../actions";

function DisplayTodo(){
    const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="todo-list-container">
      {!todos.length ? (
        <div className="no-items">Added todos will be listed here</div>
      ) : (
        todos.map((todo, index) => (
          <div className="todo-wrapper" key={index}>
            <input
              type="text"
              required
              value={todo.title}
              onChange={(e) => dispatch(updateTodo(index, e.target.value))}
              disabled={todo.isEdit ? "" : "disabled"}
            />
            <div className="btn-modify">
              <button
                id="btn-edit-todo"
                value={!todo.isEdit ? "Edit" : "Done"}
                onClick={(e) => {
                  console.log(e.target.value);
                  let flag = e.target.value === "Edit" ? true : false;
                  dispatch(editTodo(index, flag));
                }}
              >
                {!todo.isEdit ? "Edit" : "Done"}
              </button>
              <button
                id="btn-delete-todo"
                onClick={() => dispatch(removeTodo(index))}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default DisplayTodo;