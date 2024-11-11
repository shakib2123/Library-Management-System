import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();

router.post("/", BookController.createBook);
router.get("/", BookController.getAllBooks);
router.get("/:bookId", BookController.getBookById);

export const BookRoutes = router;
