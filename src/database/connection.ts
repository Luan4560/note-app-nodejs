import mongoose from "mongoose";

const connectionDataBase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@curso-node.vz6hc.mongodb.net/?retryWrites=true&w=majority&appName=curso-node`
    )
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Err", err));
};

export default connectionDataBase;
