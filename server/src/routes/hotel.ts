import { Router } from "express";
import { checkIn, hotelBooking } from "../controllers/hotel";
import authMiddleware from "../middleware";

const router = Router();

router.post("/book",  hotelBooking);
router.post("/checkIn", checkIn);

export default router;
