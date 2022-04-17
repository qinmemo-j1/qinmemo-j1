import { rest } from "msw";

export const handlers = [
  // Handles a GET /todos request
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "タスク1",
          category: "today",
          done: false,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "タスク2",
          category: "today",
          done: false,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   id: 3,
        //   title: "タスク3",
        //   category: "today",
        //   done: false,
        //   order: 3,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 4,
        //   title: "タスク4",
        //   category: "tomorrow",
        //   done: false,
        //   order: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   id: 5,
        //   title: "タスク5",
        //   category: "someday",
        //   done: false,
        //   order: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ])
    );
  }),
];
