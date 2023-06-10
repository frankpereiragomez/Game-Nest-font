import { rest } from "msw";
import { realTokenMock } from "./mockUser";
import { videogamesCollectionMock } from "./videogamesMocks";

export const apiUrl = import.meta.env.VITE_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: realTokenMock }));
  }),

  rest.get(`${apiUrl}/videogames`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ videogames: videogamesCollectionMock })
    );
  }),

  rest.delete(`${apiUrl}/videogames/:videogameId`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Videogame deleted" }));
  }),

  rest.post(`${apiUrl}/videogames/create`, (_req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ videogame: videogamesCollectionMock[0] })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}/videogames`, (_req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.delete(`${apiUrl}/videogames/:videogameId`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Videogame not found" }));
  }),
];
