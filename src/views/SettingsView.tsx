import { Sidebar } from "@/components/common/Sidebar";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { BaseOtp } from "@/components/common/base/BaseOtp";
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
