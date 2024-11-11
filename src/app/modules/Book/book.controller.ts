import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BookService } from "./book.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooksFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Books retrieved successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
};
