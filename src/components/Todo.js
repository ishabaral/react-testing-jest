import React from "react";

function Todo({ todo }) {
  const { id, title, completed } = todo;
  const work = <h1>{title}</h1>;
  const text = completed ? <strike>{work}</strike> : work;
  return <div data-testid={`todo-${id}`}>{text}</div>;
}

export default Todo;
