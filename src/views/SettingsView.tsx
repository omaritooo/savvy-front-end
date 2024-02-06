import { Sidebar } from "@/components/common/Sidebar";

import { ProfileDetails } from "@/components/modules/Profile/ProfileDetails";

export const SettingsView = () => {
  console.log("Settings View");

  return (
    <main className="flex">
      <Sidebar />
      <ProfileDetails />
    </main>
  );
};
