import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 p-4 px-10">
        <h1 className="text-white text-2xl">Xipper</h1>
        <Button variant="outline">CHECK IN</Button>
      </div>
    </>
  );
}
