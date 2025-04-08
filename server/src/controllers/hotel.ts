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
        userId: "1",
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

export const checkIn = async (req: Request, res: Response) => {
  const { aadhar, hotelId } = req.body;
  try {
    const checkIn = await prisma.checkIn.create({
      data: {
        aadhar,
        hotelId: "1",
      },
    });

    res.status(200).json({
      message: "Check-in successful",
      checkIn,
    });
    return;
  } catch (error) {
    console.error("Error checking in:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
