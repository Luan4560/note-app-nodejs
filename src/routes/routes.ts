import express from "express";
import { createUser, listUsers } from "../controller/users";
import { createNote, listNotesByUser } from "../controller/notes";

const routes = express.Router();

routes.get("/ping", (request, response) => {
  response.json("pong");
});

routes.post("/user", createUser);

routes.get("/user", listUsers);

routes.post("/notes", createNote);

routes.get("/notes/:id", listNotesByUser);

export default routes;
