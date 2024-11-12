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

const getOverdueBorrows = async () => {
  const result = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: {
        lt: new Date(new Date().setDate(new Date().getDate() - 14)),
      },
    },
    include: {
      book: true,
      member: true,
    },
  });

  const data = result.map((borrow) => {
    const overdueDays =
      Math.floor(
        (new Date().getTime() - new Date(borrow.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14;

    return {
      borrowId: borrow.borrowId,
      bookTitle: borrow.book.title,
      borrowerName: borrow.member.name,
      overdueDays,
    };
  });

  return data;
};

export const BorrowService = {
  createBorrowIntoDB,
  getOverdueBorrows,
};
