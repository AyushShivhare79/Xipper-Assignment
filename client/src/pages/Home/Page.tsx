import { Label } from "@/components/ui/label";
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

import hotels from "@/../public/hotes.json";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className=" p-10 grid grid-cols-3 h-screen">
      {hotels.value.map((hotel) => (
        <div key={hotel.HotelId} className="p-4 ">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>{hotel.HotelName}</CardTitle>
              <CardDescription>{hotel.Description}</CardDescription>
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

                    <Label htmlFor="guest">Guest</Label>
                    <div className="flex gap-5">
                      <Input
                        id="guest"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                      />
                      <Input
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                      />
                    </div>

                    <Button>Proceed to book</Button>
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
