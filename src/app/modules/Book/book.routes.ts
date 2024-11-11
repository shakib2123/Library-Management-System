import { Router } from "express";
import { BookController } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidation } from "./book.validation";

const router = Router();

router.post(
  "/",
  validateRequest(BookValidation.createBookValidation),
  BookController.createBook
);

router.get("/", BookController.getAllBooks);

router.get("/:bookId", BookController.getBookById);

router.put(
  "/:bookId",
  validateRequest(BookValidation.updateBookValidation),
  BookController.updateBook
);

router.delete("/:bookId", BookController.deleteBook);

export const BookRoutes = router;
