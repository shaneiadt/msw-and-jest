import { SharedOptions } from 'msw';
import { SetupServer } from 'msw/lib/node';

export const initServer = (
  server: SetupServer,
  options: SharedOptions = { onUnhandledRequest: 'warn' }
): SetupServer => {
  beforeAll(() => {
    server.listen(options);
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};
