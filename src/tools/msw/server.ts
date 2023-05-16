import { setupServer } from 'msw/node';
import handlers from './commonHandlers';

const server = setupServer(...handlers);

export default server;
