import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";

import { Layout } from "@/layouts";
import TodoList from "@/components/Todo/TodoList";
import { getTodos, categorizedTodo } from "@/hooks/useTodo";
import { todoListState } from "@/atoms/todoListState";

const Home: NextPage = () => {
  const categories = {
    today: {
      type: "today",
      label: "今日する",
      color: "text-rose-400",
    },
    tomorrow: {
      type: "tomorrow",
      label: "明日する",
      color: "text-orange-400",
    },
    someday: {
      type: "someday",
      label: "今度する",
      color: "text-yellow-400",
    },
  };

  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    getTodos(setTodoList);
  }, [setTodoList]);

  return (
    <Layout>
      <div className="container flex flex-wrap p-4 mx-auto">
        <TodoList
          category={categories.today}
          items={categorizedTodo(todoList, categories.today.type)}
        />
        <TodoList
          category={categories.tomorrow}
          items={categorizedTodo(todoList, categories.tomorrow.type)}
        />
        <TodoList
          category={categories.someday}
          items={categorizedTodo(todoList, categories.someday.type)}
        />
      </div>
    </Layout>
  );
};

export default Home;
