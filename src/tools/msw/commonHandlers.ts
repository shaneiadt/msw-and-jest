import { DefaultBodyType, MockedRequest, rest, RestHandler } from "msw";

/**
 * Any common [Global] REST API handlers should be added in this file
 */

export type MSWHandler = RestHandler<MockedRequest<DefaultBodyType>>;

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

export const getUsers = (): MSWHandler =>
  rest.get(/users/, async (req, res, ctx) => res(ctx.json(mockUsers)));

const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [getUsers()];

export default handlers;
