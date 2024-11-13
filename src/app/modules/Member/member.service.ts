import { Member } from "@prisma/client";
import prisma from "../../utils/prisma";
import AppError from "../../utils/AppError";
import httpStatus from "http-status";

const createMemberIntoDB = async (data: Member) => {
  const result = await prisma.member.create({
    data,
  });

  return result;
};

const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany();

  return result;
};

const getMemberByIdFromDB = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Member not found");

  return result;
};

const updateMemberIntoDB = async (memberId: string, data: Partial<Member>) => {
  const member = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member) throw new AppError(httpStatus.NOT_FOUND, "Member not found");

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });

  return {
    name: result.name,
    memberId: result.memberId,
    email: result.email,
    phone: result.phone,
  };
};

const deleteMemberFromDB = async (memberId: string) => {
  const member = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member) throw new AppError(httpStatus.NOT_FOUND, "Member not found");

  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });

  return result;
};

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
