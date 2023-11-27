import express from "express";
import http from "http";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Request, Response } from "express";

// dotenv config
dotenv.config();
const port = process.env.PORT;
// rest obj
const app = express();

// middlewares
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(compression());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("test");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
