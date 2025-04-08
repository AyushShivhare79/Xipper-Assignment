import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const response = await axios.post(
        `http://localhost:8000/api/auth/signin`,
        {
          email,
          password,
        }
      );

      console.log("Response: ", response.data);
    },
    [email, password]
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-[35%] rounded-2xl flex flex-col gap-4 border p-20">
        <Input
          className="bg-white"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="bg-white"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
