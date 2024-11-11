import { Book } from "@prisma/client";
import prisma from "../../utils/prisma";

const createBookIntoDB = async (data: Book) => {
  const result = await prisma.book.create({
    data,
  });

  return result;
};
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();

  return result;
};

const getBookByIdFromDB = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return result;
};

const updateBookIntoDB = async (bookId: string, data: Partial<Book>) => {
  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return result;
};

export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
  updateBookIntoDB,
};
