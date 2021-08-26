import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

function GetTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      className="input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("");
      }}
    >
      <input
        type="text"
        id="todo-wrapper"
        placeholder="Add todo here"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        required
      />
      <button id="btn-submit" type="submit">
        <img src="/images/plus.svg" alt="" width="20px" height="20px" />
      </button>
    </form>
  );
}

export default GetTodo;