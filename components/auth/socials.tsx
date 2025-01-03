"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

export const Socials = () => {
  const OnClick = (provider: "google" | "github") => {
    signIn(provider, {
      callBackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        variant="outline"
        className="w-full"
        onClick={() => OnClick("google")}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="w-full"
        onClick={() => OnClick("github")}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
