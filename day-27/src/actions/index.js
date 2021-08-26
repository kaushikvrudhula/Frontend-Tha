const addTodo = (todo) => {
    return {
        type:"ADD_TODO",
        payload:{title: todo , isEdit: false},
    };

};

const removeTodo = (id) => {
    return { 
        type:"REMOVE_TODO",
        payload: id,
    }
}

const updateTodo = (id, title) => {
    return {
      type: "UPDATE_TODO",
      payload: { id: id, title: title },
    };
  };
  
  const editTodo = (id, isEdit) => {
    return {
      type: "EDIT_TODO",
      payload: { id: id, isEdit: isEdit },
    };
  };
  
  export { addTodo, removeTodo, updateTodo, editTodo };