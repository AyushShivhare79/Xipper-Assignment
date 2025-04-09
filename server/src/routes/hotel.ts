import { Router } from "express";
import { hotelBooking } from "../controllers/hotel";
import { checkIn } from "../controllers/checkin";

const router = Router();

router.post("/book", hotelBooking);
router.post("/checkIn", checkIn);

export default router;
