import React from "react";
import "./Todo-item.css";

const TodoItem = (props) => {
  const [deleted, setDeleted] = React.useState(false);

  const remove = (i) => {
    props.onRemove(i);
  };

  return (
    <div
      className="active"
      onClick={() => {
        remove(props.index);
        setDeleted(true);
      }}
    >
      <span className={deleted ? "strike" : ""}>{props.value}</span>
    </div>
  );
};

export default TodoItem;
