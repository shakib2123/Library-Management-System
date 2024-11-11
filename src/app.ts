import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { BookRoutes } from "./app/modules/Book/book.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/books", BookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to Library Management System API",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
