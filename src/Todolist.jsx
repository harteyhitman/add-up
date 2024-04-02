import React, { useState } from "react";
import images from "./images/icon-sun.svg";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemToRemove) => {
    setItems(items.filter((item) => item === itemToRemove));
  };

  return (
    <div>
      <div className="todolist">
        <h1>TODO</h1>
        <img src={images} alt="" />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" id="new-item" />
        <button
          className="Add-items"
          onClick={() => {
            handleAddItem(document.getElementById("new-item").value);
            document.getElementById("new-item").value = "";
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {items.map((item) => (
          <TodoItem key={item} item={item} onRemove={handleRemoveItem} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
