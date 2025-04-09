import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const hotelBooking = async (req: Request, res: Response) => {
  const { hotelId, guestCount } = req.body;

  if (!hotelId || !guestCount || !req.userId) {
    console.error("Missing required fields");
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const booking = await prisma.booking.create({
      data: {
        guestCount,
        hotelId,
        userId: req.userId,
      },
    });

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
    return;
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
