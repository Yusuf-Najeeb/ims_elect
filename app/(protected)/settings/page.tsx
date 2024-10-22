"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

// import { useCurrentUser } from "@/hooks/use-current-user";

// import { auth, signOut } from "@/auth";

const SettingsPage = () => {
  // const session = await auth();
  // const session = useSession();
  // const user = useCurrentUser();

  const logOut = () => signOut();

  return (
    <div className="bg-white p-10 rounded-xl">
      <Button type="submit" variant="secondary" size="sm" onClick={logOut}>
        Sign out
      </Button>

      {/* <form
      action={async () => {
        "use server";

        await signOut();
      }}
      >
        <Button type="submit" variant="secondary" size="sm">
          Sign out
        </Button>
      </form> */}
    </div>
  );
};

export default SettingsPage;
