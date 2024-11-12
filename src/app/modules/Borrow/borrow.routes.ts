import { Router } from "express";
import { BorrowController } from "./borrow.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BorrowValidation } from "./borrow.validation";

const router = Router();

router.post(
  "/",
  validateRequest(BorrowValidation.createBorrowValidation),
  BorrowController.createBorrow
);

router.get("/overdue", BorrowController.getOverdueBorrows);

export const BorrowRoutes = router;
