import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import type { VFC } from "react";

type DeleteButtonProps = {
  todoId: number;
};

export const DeleteButton: VFC<DeleteButtonProps> = () => {
  return (
    <button>
      <TrashIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
};
