import express, { response } from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import connectionDataBase from "./database/connection";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes/routes";

const port = 8080;
const app = express();

configDotenv();
connectionDataBase();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  next();
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
