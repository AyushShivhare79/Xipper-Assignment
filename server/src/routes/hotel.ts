import { Router } from "express";
import { getBookedHotels, hotelBooking } from "../controllers/hotel";
import { checkIn } from "../controllers/checkin";

const router = Router();

router.post("/book", hotelBooking);
router.post("/checkIn", checkIn);
router.get("/bookedHotels", getBookedHotels);

export default router;
