import { configDotenv } from "dotenv";
import { NoteModel } from "../model/note.schema";

configDotenv();

export const createNote = async (request, response) => {
  try {
    const { userId, title, content, createdAt } = request.body;

    if (!userId && !title && !content && !createdAt) {
      response
        .status(400)
        .json("Please check the response, must missing field");
    }

    const newNote = new NoteModel({
      userId,
      title,
      content,
      createdAt: new Date(),
    });

    response.status(201).json(newNote);

    await newNote.save();
  } catch (err) {
    response.status(500).json("Couldnt create a note.", { message: err });
  }
};

export const listNotesByUser = async (request, response) => {
  try {
    const { id } = request.params;

    console.log(request.params?.id);
    const notes = await NoteModel.findById(id);

    response.status(200).json({ notes });
  } catch (err) {
    response.status(500).json("Couldnt find the resources.", { message: err });
  }
};
