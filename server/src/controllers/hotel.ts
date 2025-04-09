import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const hotelBooking = async (req: Request, res: Response) => {
  const { hotelId, guests } = req.body;

  try {
    const booking = await prisma.hotel.create({
      data: {
        hotelId,
        guests,
        userId: req.userId!,
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

