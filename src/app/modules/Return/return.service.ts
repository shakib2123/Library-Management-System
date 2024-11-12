import prisma from "../../utils/prisma";

const returnBook = async (borrowId: string) => {
  const borrow = await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId,
    },
  });

  if (!borrow) {
    throw new Error("Book not found");
  }

  if (borrow.returnDate) {
    throw new Error("Book already returned");
  }

  const result = await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};

export const ReturnService = {
  returnBook,
};
