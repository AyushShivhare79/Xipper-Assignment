import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import hotels from "@/../public/hotels.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Guests {
  id: string;
  fullName: string;
  aadhar: string;
  createdAt: Date;
  updatedAt: Date;
  bookingId: string;
}

interface BookedHotels {
  id: string;
  hotelId: string;
  guestCount: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  guests: Guests[];
}

export default function CheckIn() {
  const [bookedHotels, setBookedHotels] = useState<BookedHotels[]>([]);

  useEffect(() => {
    const getBookedHotels = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/hotel/bookedHotels`,
        {
          withCredentials: true,
        }
      );
      setBookedHotels(response.data);
    };

    getBookedHotels();
  }, []);

  return (
    <>
      {bookedHotels.map((hotel) => (
        <Card>
          <CardHeader>
            <CardTitle>{hotels[hotel.hotelId].name}</CardTitle>
            <CardDescription>
              {hotels[hotel.hotelId].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {hotel.guests.map((guest) => (
                <div className="flex gap-4">
                  <Input
                    type="text"
                    onChange={(e) => {
                      // guest.fullName = e.target.value;
                      setBookedHotels((prev) =>
                        prev.map((h) => {
                          if (h.id === hotel.id) {
                            return {
                              ...h,
                              guests: h.guests.map((g) => {
                                if (g.id === guest.id) {
                                  return { ...g, fullName: e.target.value };
                                }
                                return g;
                              }),
                            };
                          }
                          return h;
                        })
                      );
                    }}
                    value={guest.fullName}
                    placeholder="Full Name"
                  />

                  <Input
                    type="text"
                    onChange={(e) => {
                      // guest.aadhar = e.target.value;
                      setBookedHotels((prev) =>
                        prev.map((h) => {
                          if (h.id === hotel.id) {
                            return {
                              ...h,
                              guests: h.guests.map((g) => {
                                if (g.id === guest.id) {
                                  return { ...g, aadhar: e.target.value };
                                }
                                return g;
                              }),
                            };
                          }
                          return h;
                        })
                      );
                    }}
                    value={guest.aadhar}
                    placeholder="Aadhar"
                  />

                  <Button variant="default">Checkin</Button>
                </div>
              ))}
            </div>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      ))}
    </>
  );
}
