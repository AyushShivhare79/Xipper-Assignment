import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export default function Navbar() {
  const navigate = useNavigate();

  const button = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "CHECK IN",
      path: "/checkin",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 p-4 px-10">
        <h1 className="text-white text-2xl">Xipper</h1>
        <div className="flex justify-center items-center gap-4">
          {button.map((btn) => (
            <Button
              key={btn.name}
              onClick={() => navigate(btn.path)}
              variant="outline"
              className="cursor-pointer"
            >
              {btn.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
