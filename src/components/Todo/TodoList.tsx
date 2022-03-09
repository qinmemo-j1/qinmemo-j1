import React from "react";
import type { VFC } from "react";

type TodoListProps = {
  category: {
    label: string;
    color: string;
  };
};

export const TodoList: VFC<TodoListProps> = ({ category }) => {
  return (
    <div key={category.label} className="px-4 mb-4 w-full md:w-1/3">
      <h1 className={`text-2xl font-bold ${category.color}`}>
        {category.label}
      </h1>
    </div>
  );
};

export default TodoList;
