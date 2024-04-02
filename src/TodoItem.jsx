import React from "react";

function TodoItem({ item, onRemove}) {
  return (
    <li>
      {item}
      <button className="remove" onClick={() => onRemove={item}}>Delete</button>
    </li>
  );
}

export default TodoItem;


