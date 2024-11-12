import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BorrowService } from "./borrow.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.createBorrowIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});

const getOverdueBorrows = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.getOverdueBorrows();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message:
      result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
    data: result,
  });
});

export const BorrowController = {
  createBorrow,
  getOverdueBorrows,
};
