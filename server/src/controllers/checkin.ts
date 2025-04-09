import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const checkIn = async (req: Request, res: Response) => {
  const { guestId, fullName, aadhar, bookingId } = req.body;

  try {
    const checkin = await prisma.guest.update({
      where: {
        id: guestId,
      },
      data: {
        fullName,
        aadhar,
      },
    });

    res.status(200).json({
      message: "Check-in successful",
      checkin,
    });
    return;
  } catch (error) {
    console.error("Error checking in:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
