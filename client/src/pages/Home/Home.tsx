import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import hotels from "@/../public/hotels.json";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import axios from "axios";

export default function Home() {
  const [guests, setGuests] = useState("");

  const handleBooking = useCallback(
    async (hotelId: number) => {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/hotel/book`,
        {
          hotelId: hotelId.toString(),
          guestCount: Number(guests),
        },
        { withCredentials: true }
      );

      if (response.status === 201) {
        alert("Booking successful!");
      } else {
        alert("Booking failed!");
      }
    },
    [guests]
  );

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-5xl">Home</h1>

      <div className="grid grid-cols-3 h-screen">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="p-4 ">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>{hotel.name}</CardTitle>
                <CardDescription>{hotel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p>Price: {hotel.price}$</p>
                  <p>Rating: {hotel.rating}</p>
                  <div className="flex gap-2">
                    Facilities:
                    {hotel.amenities.map((facility, index) => (
                      <span key={index}>
                        {facility}
                        {index !== hotel.amenities.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Button className="w-full cursor-pointer" variant="default">
                      Book now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="space-y-10">
                      <DialogTitle>Confirm your booking</DialogTitle>
                      <Input
                        type="number"
                        placeholder="Number of guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                      />
                      <Button onClick={() => handleBooking(hotel.id)}>
                        Proceed to book
                      </Button>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
