import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import hotels from "@/../public/hotes.json";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-3 h-screen">
      {hotels.value.map((hotel) => (
        <div key={hotel.HotelId} className=" border border-black p-4">
          <Card>
            <CardHeader>
              <CardTitle>{hotel.HotelName}</CardTitle>
              <CardDescription>{hotel.Description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Hotel Content</p>
            </CardContent>
            <CardFooter>
              <Button variant="default">Book now</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
