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

const getMemberByIdFromDB = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  return result;
};

const updateMemberIntoDB = async (memberId: string, data: Partial<Member>) => {
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });

  return result;
};

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateMemberIntoDB,
};
