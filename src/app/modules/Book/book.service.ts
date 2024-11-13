import { Book } from "@prisma/client";
import prisma from "../../utils/prisma";
import AppError from "../../utils/AppError";
import httpStatus from "http-status";

// create book
const createBookIntoDB = async (data: Book) => {
  const result = await prisma.book.create({
    data,
  });

  return result;
};

// get all books
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();

  return result;
};

// get book by id
const getBookByIdFromDB = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Book not found");

  return result;
};

// update book
const updateBookIntoDB = async (bookId: string, data: Partial<Book>) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!book) throw new AppError(httpStatus.NOT_FOUND, "Book not found");

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return result;
};

// delete book
const deleteBookFromDB = async (bookId: string) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!book) throw new AppError(httpStatus.NOT_FOUND, "Book not found");

  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return result;
};

export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
