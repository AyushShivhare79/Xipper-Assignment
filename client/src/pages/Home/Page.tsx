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

import hotels from "@/../public/hotels.json";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [guests, setGuests] = useState(1);
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

                    <div className="space-y-5">
                      <div className="flex flex-col gap-2">
                        <Label className="text-xl" htmlFor="firstName">
                          First name
                        </Label>
                        <Input
                          type="text"
                          placeholder="First name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-xl" htmlFor="lastName">
                          Last name
                        </Label>

                        <Input
                          type="text"
                          placeholder="Last name"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label className="text-xl" htmlFor="guests">
                          Number of guests
                        </Label>
                        <Input type="number" placeholder="Number of guests" />
                      </div>
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
