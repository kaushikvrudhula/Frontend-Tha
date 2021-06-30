const input = document.querySelector("input");
const btn = document.querySelector("button");
const todo = document.querySelector(".t_content");
const todos = [
  {
    title: "Day 10 THA",
    done: false,
  },
  {
    title: "Day 11 THA",
    done: false,
  },
];
localStorage.setItem("todos", todos);
function loadTodo() {
  todos.map((todo) => {
    const newTodo = document.createElement("div");
    newTodo.innerHTML = todo.title;
    todoList.appendChild(newTodo);
  });
}

loadTodo();
btn.addEventListener("click", () => {
  const newtodo = document.createElement("div");
  newtodo.innerHTML = input.value;
  todo.appendChild(newtodo);
  input.value = "";
});

localStorage.setItem("todo", todos);

function loadData() {
  if(!localStorage.getItem("tasks")) return;
  tasks = JSON.parse(localStorage.getItem("tasks"));
  total.innerHTML = tasks.length;
  tasks.forEach(todo,i) => {
    loadTodo(todo,i);
  });
}