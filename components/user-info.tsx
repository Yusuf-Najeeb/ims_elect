import { ExtendedUser } from "@/next-auth";
import { Card, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-sm">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
        <p>{JSON.stringify(user)}</p>
      </CardHeader>
    </Card>
  );
};
