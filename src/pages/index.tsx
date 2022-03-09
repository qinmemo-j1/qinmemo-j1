import React from "react";
import type { NextPage } from "next";

import { Layout } from "@/layouts";
import TodoList from "@/components/Todo/TodoList";

const Home: NextPage = () => {
  const categories = {
    today: {
      label: "今日する",
      color: "text-rose-400",
    },
    tomorrow: {
      label: "明日する",
      color: "text-orange-400",
    },
    someday: {
      label: "今度する",
      color: "text-yellow-400",
    },
  };

  return (
    <Layout>
      <div className="container flex flex-wrap p-4 mx-auto">
        <TodoList category={categories.today} />
        <TodoList category={categories.tomorrow} />
        <TodoList category={categories.someday} />
      </div>
    </Layout>
  );
};

export default Home;
