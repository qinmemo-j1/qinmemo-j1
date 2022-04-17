import React from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import type { VFC } from "react";

type AddTodoButtonProps = {
  onClick: () => void;
};

export const AddTodoButton: VFC<AddTodoButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex items-center w-fit cursor-pointer"
      onClick={onClick}
    >
      <PlusCircleIcon className="w-6 h-6 text-gray-400" />
      <span className="ml-2 text-gray-400">タスクを追加する</span>
    </button>
  );
};

export default AddTodoButton;
