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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "タスク2",
          category: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "タスク3",
          category: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
    );
  }),
];
