import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const checkIn = async (req: Request, res: Response) => {
  const { aadhar, hotelId } = req.body;
  console.log("Aadhar: ", aadhar);
  console.log("Hotel ID: ", hotelId);

  try {
    const checkIn = await prisma.checkIn.create({
      data: {
        hotelId,
        aadhar,
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
