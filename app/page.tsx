import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const page = () => {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-4xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🏋️‍♂️ Auth
        </h1>
        <p className="text-lg text-white">A simple Authentication Service</p>

        <div>
          <Button variant="secondary" size="lg" className="text-semibold">
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
};

export default page;
