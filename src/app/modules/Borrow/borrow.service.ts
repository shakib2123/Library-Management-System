import { BorrowRecord } from "@prisma/client";
import prisma from "../../utils/prisma";

const createBorrowIntoDB = async (data: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data,
  });
  return {
    borrowId: result.borrowId,
    borrowDate: result.borrowDate,
    bookId: result.bookId,
    memberId: result.memberId,
  };
};

export const BorrowService = {
  createBorrowIntoDB,
};
