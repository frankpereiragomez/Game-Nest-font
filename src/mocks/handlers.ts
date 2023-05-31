import { rest } from "msw";
import { token } from "./mockUser";

export const apiUrl = import.meta.env.VITE_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: token }));
  }),
];
