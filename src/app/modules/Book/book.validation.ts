import { z } from "zod";

const createBookValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    }),
    genre: z.string({
      required_error: "Genre is required",
      invalid_type_error: "Genre must be a string",
    }),
    publishedYear: z.number({
      required_error: "Published year is required",
      invalid_type_error: "Published year must be a number",
    }),
    totalCopies: z.number({
      required_error: "Total copies is required",
      invalid_type_error: "Total copies must be a number",
    }),
    availableCopies: z.number({
      required_error: "Available copies is required",
      invalid_type_error: "Available copies must be a number",
    }),
  }),
});
const updateBookValidation = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string",
      })
      .optional(),
    genre: z
      .string({
        required_error: "Genre is required",
        invalid_type_error: "Genre must be a string",
      })
      .optional(),
    publishedYear: z
      .number({
        required_error: "Published year is required",
        invalid_type_error: "Published year must be a number",
      })
      .optional(),
    totalCopies: z
      .number({
        required_error: "Total copies is required",
        invalid_type_error: "Total copies must be a number",
      })
      .optional(),
    availableCopies: z
      .number({
        required_error: "Available copies is required",
        invalid_type_error: "Available copies must be a number",
      })
      .optional(),
  }),
});

export const BookValidation = { createBookValidation, updateBookValidation };
