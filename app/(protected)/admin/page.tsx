"use client";
import { UserRole } from "@prisma/client";
import { FormSuccess } from "@/components/form-success";
import { toast } from "sonner";
import { RoleGate } from "@/components/auth/role-gate";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { admin } from "@/actions/admin";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((res) => {
      if (res.success) toast.success(res.success);
      if (res.error) toast.error(res.error);
    });
  };
  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("Allowed API Route");
      } else {
        toast.error("Forbidden API Route ");
      }
    });
  };
  return (
    <Card className="w-[600px] shadow-sm">
      <CardHeader>
        <p className="text-2xl font-bold text-center">⚙ Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to view this content" />
        </RoleGate>
        <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-md">
          <p className="text-sm font-medium">Admin-Only API Route</p>

          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>

        <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-md">
          <p className="text-sm font-medium">Admin-Only Server Action</p>

          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
