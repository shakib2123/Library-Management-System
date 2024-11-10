import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to Library Management System API",
  });
});

export default app;
