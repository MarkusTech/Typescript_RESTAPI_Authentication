import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./config/db";

// rest obj
const app = express();
const port = 5000;

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

// database connection
connectDB();

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
