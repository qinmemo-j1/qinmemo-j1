import React from "react";
import clsx from "clsx";
import type { VFC } from "react";

import type { Todo } from "@/types/todo";

type TodoListItemProps = {
  title: string;
  onClickLabel: (todo: Todo) => void;
  onClickDone: (todo: Todo) => void;
  todo: Todo;
};

export const TodoListItem: VFC<TodoListItemProps> = (props) => {
  const { title, todo, onClickLabel, onClickDone } = props;
  return (
    <div className="group flex gap-2 items-start w-full cursor-pointer">
      <div className="flex-wrap">
        <input
          type="radio"
          className="w-6 h-6 border-2 border-base-300 checked:border-base-300 hover:border-base-300"
          checked={todo?.done}
          onClick={() => {
            onClickDone(todo);
          }}
          readOnly
        />
      </div>

      <label
        className={clsx(
          "flex-1 whitespace-pre-wrap break-words md:line-clamp-none line-clamp-4",
          todo.done && "text-gray-400 line-through"
        )}
        onClick={() => onClickLabel(todo)}
      >
        {title}
      </label>
    </div>
  );
};

export default TodoListItem;
