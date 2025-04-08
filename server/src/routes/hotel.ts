import { Router } from "express";
import { checkIn, hotelBooking } from "../controllers/hotel";

const router = Router();

router.post("/book", hotelBooking);
router.post("/checkIn", checkIn);

export default router;
