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

export const SettingsView = () => {
  console.log("Settings View");
  const [toggle, setToggle] = useState(false);
  return (
    <main className="flex">
      <Sidebar />
      <div className="container flex flex-col lg:flex-row py-7 gap-x-2">
        <Card className="flex flex-col lg:w-1/2 gap-y-7 lg:max-w-3/4 lg:min-w-3/4 h-fit">
          {toggle ? <InfoCard /> : <EditCard />}
          <CardFooter>
            <Button onClick={() => setToggle(!toggle)}>Edit Data</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col w-full lg:min-w-1/4 h-fit lg:w-[35%]">
          <CardHeader className={cn("flex flex-row items-center gap-x-5")}>
            <CardTitle>Payments & Plans:</CardTitle>
          </CardHeader>
          <CardContent>
            <CardTitle>Personal Info:</CardTitle>
            <div className="flex flex-col mt-5 gap-y-5">
              <span>Subscription: unlimited</span>
              <span>Plan: Free</span>
              <span>Payment: **** **** **** 9900</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

const InfoCard = () => (
  <>
    <CardHeader className={cn("flex flex-row items-center gap-x-5")}>
      <div className="w-24 h-24 bg-gray-400 rounded-full" />
      <CardTitle>Test User</CardTitle>
    </CardHeader>
    <CardContent>
      <CardTitle>Personal Info:</CardTitle>
      <div className="flex flex-col mt-5 gap-y-5">
        <span>Name: Test User</span>
        <span>Username: Test User</span>
        <span>Email: Test User</span>
        <span>Password: *********</span>
      </div>
    </CardContent>
    <CardContent>
      <CardTitle>Integrations:</CardTitle>
      <div className="flex mt-5 text-white w-fit gap-x-5 gap-y-5">
        <Button className="bg-blue-400" variant="outline">
          Integrate with Facebook
        </Button>
        <Button className="bg-black" variant="outline">
          Integrate with Twitter
        </Button>
        <Button className="bg-blue-700" variant="outline">
          Integrate with Linkedin
        </Button>
      </div>
    </CardContent>
  </>
);

const EditCard = () => {
  console.log("Form");
  return (
    <>
      <CardHeader className={cn("flex flex-row items-center gap-x-5")}>
        <div className="w-24 h-24 bg-gray-400 rounded-full" />
        <CardTitle>Test User</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4 ">
        <div className="flex items-center gap-12">
          <span className="text-nowrap w-36">First Name</span>
          <Input value="Test" />
        </div>

        <div className="flex items-center gap-12 ">
          <span className="text-nowrap w-36">Last Name</span>
          <Input />
        </div>

        <div className="flex items-center gap-12 ">
          <span className="text-nowrap w-36">Email</span>
          <Input />
        </div>

        <div className="flex items-center gap-12 ">
          <span className="text-nowrap w-36">Password</span>
          <Input />
        </div>

        <div className="flex items-center gap-5">
          <span className=" text-nowrap w-36">Confirm password</span>
          <Input />
        </div>
      </CardContent>
    </>
  );
};
