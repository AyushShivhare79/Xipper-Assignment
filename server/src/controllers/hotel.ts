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

    const guests = Array.from({ length: guestCount }, (_, index) => ({
      fullName: `Guest ${index + 1}`,
      aadhar: "",
      bookingId: booking.id,
    }));

    await prisma.guest.createMany({
      data: guests,
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

export const getBookedHotels = async (req: Request, res: Response) => {
  if (!req.userId) {
    console.error("User ID is missing");
    res.status(400).json({ message: "User ID is missing" });
    return;
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: req.userId,
      },
      include: {
        guests: true,
      },
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching booked hotels:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
