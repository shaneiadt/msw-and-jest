import { setupWorker } from "msw";
import handlers from "./commonHandlers";

export const worker = setupWorker(...handlers);
