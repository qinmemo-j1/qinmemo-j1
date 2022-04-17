import axios from "axios";

import type { Todo } from "@/types/todo";

export const getTodos = async (setTodos: any) => {
  await axios.get("/todos").then((res) => setTodos(res.data));
};

export const categorizedTodo = (
  items: Todo[] | undefined,
  category: string
) => {
  if (items === undefined) {
    return [];
  }
  return items.filter((todo) => todo.category === category);
};
