import { rest } from "msw";
import { SetupServer } from "msw/lib/node";

import server from "../../../tools/msw/server";
import { MSWHandler } from "../../../tools/msw/commonHandlers";

export const getUsersException = (): MSWHandler =>
  rest.get(/users/, async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: "Bad Request" }))
  );

export const setupUserListHandlers = (
  endpoints: MSWHandler[] = []
): SetupServer => {
  server.use(...endpoints);
  return server;
};
