import { Book } from "@prisma/client";
import prisma from "../../utils/prisma";

const createBookIntoDB = async (data: Book) => {
  const result = await prisma.book.create({
    data,
  });

  return result;
};

export const BookService = {
  createBookIntoDB,
};
