import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MemberService } from "./member.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMemberIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getAllMembersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Members retrieved successfully",
    data: result,
  });
});

export const MemberController = {
  createMember,
  getAllMembers,
};
