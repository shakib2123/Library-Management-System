import { z } from "zod";

const createBorrowValidation = z.object({
  body: z.object({
    bookId: z.string({
      required_error: "Book id is required",
      invalid_type_error: "Book id must be a string",
    }),
    memberId: z.string({
      required_error: "Member id is required",
      invalid_type_error: "Member id must be a string",
    }),
  }),
});

export const BorrowValidation = {
  createBorrowValidation,
};
