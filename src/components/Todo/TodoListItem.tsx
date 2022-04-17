import React from "react";
import clsx from "clsx";
import type { VFC } from "react";

import type { Todo } from "@/types/todo";
import { DeleteButton } from "./DeleteButton";
import { CopyButton } from "./CopyButton";

type TodoListItemProps = {
  title: string;
  onClickLabel: (todo: Todo) => void;
  onClickDone: (todo: Todo) => void;
  todo: Todo;
  radioColor: string;
};

export const TodoListItem: VFC<TodoListItemProps> = (props) => {
  const { title, todo, radioColor, onClickLabel, onClickDone } = props;
  return (
    <div className="group flex gap-2 items-start w-full cursor-pointer">
      <div className="flex-wrap">
        <input
          type="radio"
          className={clsx("w-6 h-6 border-2", radioColor)}
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

      <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100">
        <CopyButton todoId={todo.id} />
        <DeleteButton todoId={todo.id} />
      </div>
    </div>
  );
};

export default TodoListItem;
