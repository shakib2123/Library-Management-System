import { Member } from "@prisma/client";
import prisma from "../../utils/prisma";

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

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
};
