import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ReturnService } from "./return.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const { borrowId } = req.body;
  const result = await ReturnService.returnBook(borrowId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book returned successfully",
  });
});

export const ReturnController = {
  returnBook,
};
