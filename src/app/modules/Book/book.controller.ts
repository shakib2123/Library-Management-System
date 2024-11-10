import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDB(req.body);
});

export const BookController = {
  createBook,
};
