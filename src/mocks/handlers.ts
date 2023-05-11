import { rest } from "msw";

const mockUsers: User[] = [
  {
    id: 0,
    name: "User Zero",
    username: "U0",
    email: "user.zero@users.com",
    website: "https://www.fakeusers.com/user/0",
  },
  {
    id: 1,
    name: "User One",
    username: "U1",
    email: "user.one@users.com",
    website: "https://www.fakeusers.com/user/1",
  },
];

const getUsers = rest.get(/users/, async (req, res, ctx) =>
  res(ctx.json(mockUsers))
);

export const getUsersException = rest.get(/users/, async (req, res, ctx) =>
  res(ctx.status(500), ctx.json({ message: "Bad Request" }))
);

export const handlers = [getUsers];
