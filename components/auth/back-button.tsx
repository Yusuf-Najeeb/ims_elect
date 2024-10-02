"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}
export const BackButton = ({ label, href }: BackButtonProps) => {
  const router = useRouter();
  const handleRoute = () => router.push(href);
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-2">
      <Button size="sm" variant="link" className="w-full" onClick={handleRoute}>
        {label}
      </Button>
      <Button
        size="sm"
        variant="link"
        className="w-full font-normal"
        onClick={handleRoute}
        asChild
      >
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};
