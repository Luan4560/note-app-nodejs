import { configDotenv } from "dotenv";
import { UserModel } from "../model/user.schema";

configDotenv();

export const createUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return await response.status(400).json({ message: "Missing fields" });
    }

    const user = new UserModel({
      name,
      email,
      password,
    });

    await user.save();

    response.status(201).json({ name, email, password });
  } catch (error) {
    response
      .status(500)
      .json("Internal server error, could not create user", { message: error });
  }
};

export const listUsers = async (request, response) => {
  try {
    const users = await UserModel.find();

    response.status(200).json(users);
  } catch (error) {
    response
      .status(404)
      .json("Internal server error, could not list users", { message: error });
  }
};
