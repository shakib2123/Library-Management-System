import { Router } from "express";
import { MemberController } from "./member.controller";
import validateRequest from "../../middlewares/validateRequest";
import { MemberValidation } from "./member.validation";

const router = Router();

router.post(
  "/",
  validateRequest(MemberValidation.createMemberValidationSchema),
  MemberController.createMember
);

router.get("/", MemberController.getAllMembers);
router.get("/:memberId", MemberController.getMemberById);

export const MemberRoutes = router;
