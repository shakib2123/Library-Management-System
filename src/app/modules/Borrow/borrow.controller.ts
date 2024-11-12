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

export const BorrowController = {
  createBorrow,
};
