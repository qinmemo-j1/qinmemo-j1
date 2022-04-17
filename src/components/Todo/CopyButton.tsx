import React from "react";
import { DuplicateIcon } from "@heroicons/react/outline";
import type { VFC } from "react";

type DeleteButtonProps = {
  todoId: number;
};

export const CopyButton: VFC<DeleteButtonProps> = () => {
  return (
    <button>
      <DuplicateIcon className="w-6 h-6 text-gray-400" />
    </button>
  );
};
