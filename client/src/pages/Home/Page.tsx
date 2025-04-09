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

export default function Page() {
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

      console.log("Response: ", response);
    },
    [guests]
  );
  return (
    <div className=" p-10 grid grid-cols-3 h-screen">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="p-4 ">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>{hotel.name}</CardTitle>
              <CardDescription>{hotel.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Hotel Content</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger>
                  <Button className="cursor-pointer" variant="default">
                    Book now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
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
  );
}
