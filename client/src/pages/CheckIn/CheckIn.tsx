import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCallback, useEffect, useState } from "react";
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

  const handleCheckin = useCallback(
    async (guestId: string, firstName: string, aadhar: string) => {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/hotel/checkin`,
        {
          guestId: guestId,
          fullName: firstName,
          aadhar: aadhar,
        },
        { withCredentials: true }
      );
    },
    []
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10">
        {bookedHotels.map((hotel) => (
          <Card key={hotel.id} className="w-[60%]">
            <CardHeader>
              <CardTitle>{hotels[Number(hotel.hotelId)].name}</CardTitle>
              <CardDescription>
                {hotels[Number(hotel.hotelId)].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {hotel.guests.map((guest) => (
                  <div className="flex gap-4">
                    <Input
                      type="text"
                      onChange={(e) => {
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

                    <Button
                      onClick={() => {
                        handleCheckin(guest.id, guest.fullName, guest.aadhar);
                      }}
                      variant="default"
                    >
                      Checkin
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
