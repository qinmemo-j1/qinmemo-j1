import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import type { VFC, KeyboardEvent } from "react";

import TodoListItem from "./TodoListItem";
import type { Todo } from "@/types/todo";
import AddTodoButton from "./AddTodoButton";
import InputTodo from "./InputTodo";
import { todoListState } from "@/atoms/todoListState";

type TodoListProps = {
  category: {
    type: string;
    label: string;
    color: string;
    radioColor: string;
  };
  items: Todo[] | [];
};

export const TodoList: VFC<TodoListProps> = ({ category, items }) => {
  const [inputDisplay, setInputDisplay] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const onClickAddTodoButton = () => {
    setInputDisplay(true);
    inputRef.current && inputRef.current.focus();
  };

  const onChangeInputValue = () => {
    if (!inputRef.current) return;
    setInputValue(inputRef.current.value);
  };

  const onBlueInputTodo = (todo?: Todo) => {
    if (todo) {
      updateTodo(todo);
      setEditTodo(null);
    } else {
      createTodo();
      setInputDisplay(false);
    }
    setInputValue("");
  };

  const createTodo = () => {
    if (!inputRef.current) return;
    if (!inputRef.current.value) {
      setInputDisplay(false);
      return;
    }

    try {
      const todoIds = todoList
        .filter((t) => t)
        .map((t) => t && t.id) as number[];
      const orders = todoList
        .filter((t) => t.category === category.type)
        .map((t) => t && t.order) as number[];
      const latestId = Math.max(...todoIds);
      const maxOrderNo = Math.max(...orders);
      const newTodo = {
        id: latestId + 1,
        title: inputRef.current.value,
        category: category.type,
        done: false,
        order: maxOrderNo + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const newTodoList = [...todoList, newTodo];

      setTodoList(newTodoList);
    } catch (e) {
      console.error(e);
    }
  };

  const updateTodo = (todo: Todo) => {
    if (!inputRef.current) return;
    if (!inputRef.current.value) {
      setEditTodo(null);
      return;
    }

    try {
      const newTodo = {
        ...todo,
        title: inputRef.current.value,
      };
      const newTodoList = todoList.map((t) =>
        t && t.id === todo.id ? newTodo : t
      );
      setTodoList(newTodoList);
    } catch (e) {
      console.error(e);
    }
  };

  const onClickLabel = (todo: Todo) => {
    setEditTodo(todo);
    inputRef.current && inputRef.current.focus();
    setInputValue(todo.title);
  };

  const onEnterKeyPress = (
    e: KeyboardEvent<HTMLTextAreaElement>,
    todo?: Todo
  ) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (todo) {
      updateTodo(todo);
      setEditTodo(null);
    } else {
      createTodo();
    }
    setInputValue("");
  };

  const isEditTodo = (todo: Todo) => {
    return editTodo && todo === editTodo;
  };

  const onClickDone = (todo: Todo) => {
    try {
      const newTodo = {
        ...todo,
        done: !todo.done,
      };
      const newTodoList = todoList.map((t) =>
        t && t.id === todo.id ? newTodo : t
      );

      setTodoList(newTodoList);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div key={category.label} className="px-4 mb-4 w-full md:w-1/3">
      <h1 className={`mb-6 text-2xl font-bold ${category.color}`}>
        {category.label}
      </h1>

      <div className="flex flex-col space-y-4">
        {items.map((todo) => {
          return (
            todo &&
            (isEditTodo(todo) ? (
              <InputTodo
                key={todo.id}
                ref={inputRef}
                value={inputValue}
                radioColor={category.radioColor}
                onChange={onChangeInputValue}
                onBlur={onBlueInputTodo}
                onEnterKeyPress={onEnterKeyPress}
              />
            ) : (
              <TodoListItem
                key={todo.id}
                todo={todo}
                title={todo.title}
                radioColor={category.radioColor}
                onClickLabel={onClickLabel}
                onClickDone={onClickDone}
              />
            ))
          );
        })}
      </div>

      {inputDisplay ? (
        <InputTodo
          ref={inputRef}
          value={inputValue}
          radioColor={category.radioColor}
          onChange={onChangeInputValue}
          onBlur={onBlueInputTodo}
          onEnterKeyPress={onEnterKeyPress}
        />
      ) : (
        <AddTodoButton onClick={onClickAddTodoButton} />
      )}
    </div>
  );
};

export default TodoList;
