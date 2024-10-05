import { auth } from "next-auth";

const SettingsPage = async () => {
  const user = await auth.session();
  return (
    <div>
      <h1>Settings Page</h1>
      {JSON.stringify(user)}
    </div>
  );
};

export default SettingsPage;
