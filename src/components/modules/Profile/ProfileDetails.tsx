import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const ProfileDetails = () => {
  console.log("Mounted");

  return (
    <div className="container grid grid-cols-8 py-7 gap-x-2 min-h-max h-max gap-y-5">
      <Card className="flex flex-col col-span-8 md:col-span-5 lg:col-span-3 gap-y-4 h-fit">
        <InfoCard />
        <CardFooter>
          <Dialog>
            <DialogTrigger className="px-4 py-2 text-white bg-black rounded-md ">
              Edit data
            </DialogTrigger>
            <DialogContent>
              <EditCard />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <Card className="flex flex-col w-full h-full col-span-8 md:col-span-3 lg:col-span-2">
        <CardHeader className={cn("flex flex-row items-center gap-x-5")}>
          <CardTitle>Payments & Plans:</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col px-4 gap-y-4 w-[75%]">
          <Progress value={63} />
          <Progress value={55} />
          <Progress value={21} />
        </CardContent>
        <CardFooter className="mt-auto">
          <Button>Upgrade</Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col h-full col-span-8 md:col-span-5 lg:col-span-3 gap-y-4">
        <CardHeader>
          <CardTitle>Analytics:</CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="files" className="flex flex-col h-full">
            <TabsList className="mb-3 w-fit">
              <TabsTrigger value="files">Account</TabsTrigger>
              <TabsTrigger value="fb">Facebook</TabsTrigger>
              <TabsTrigger value="yt">Youtube</TabsTrigger>
              <TabsTrigger value="linkedin">Linkedin</TabsTrigger>
            </TabsList>
            <TabsContent
              value="files"
              className="flex flex-col justify-between h-full mt-2 gap-y-3"
            >
              <div className="mb-4">
                <Label htmlFor="file">Upload content</Label>
                <Input className="w-2/3 " id="file" type="file" />
              </div>
              <span className="">RC Total: 3</span>
            </TabsContent>
            <TabsContent value="fb" className="flex flex-col justify-center">
              <div className="flex flex-col justify-between h-full gap-y-4">
                <Badge className="py-2 w-fit">RC: 32</Badge>
                <Badge variant="outline" className="py-2 w-fit">
                  Success: 32
                </Badge>
                <Badge variant="destructive" className="py-2 w-fit">
                  Error: 32
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value="yt">
              <div className="flex flex-col justify-between h-full gap-y-4">
                <Badge className="py-2 w-fit">RC: 32</Badge>
                <Badge variant="outline" className="py-2 w-fit">
                  Success: 32
                </Badge>
                <Badge variant="destructive" className="py-2 w-fit">
                  Error: 32
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value="linkedin">
              <div className="flex flex-col justify-between h-full gap-y-4">
                <Badge className="py-2 w-fit">RC: 32</Badge>
                <Badge variant="outline" className="py-2 w-fit">
                  Success: 32
                </Badge>
                <Badge variant="destructive" className="py-2 w-fit">
                  Error: 32
                </Badge>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const InfoCard = () => (
  <>
    <CardHeader className={cn("flex flex-row items-center gap-x-5")}>
      <div className="w-32 h-32 bg-gray-400 rounded-full" />
      <div className="flex flex-col gap-y-1">
        <CardTitle>Test User</CardTitle>
        <span className="ml-1 italic text-gray-500">username</span>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex mt-5 text-white w-fit gap-x-5 gap-y-5">
        <Button
          className="bg-[#0766FF] flex py-2 text-lg w-fit"
          variant="outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-facebook"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </Button>
        <Button
          className="flex py-2 text-lg text-white bg-black gap-x-1"
          variant="outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-x"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </Button>
        <Button
          className="flex py-2 text-lg text-white bg-blue-700 gap-x-1"
          variant="outline"
        >
          {/* <img className="w-7 h-7" src="linkedin.svg" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
          {/* <span>Linkedin</span> */}
        </Button>
      </div>
    </CardContent>
  </>
);

const EditCard = () => {
  console.log("Form");
  return (
    <>
      <CardContent className="flex flex-col gap-y-4 ">
        <div className="w-32 h-32 mx-auto bg-gray-400 rounded-full" />
        <div className="flex flex-col gap-4">
          <Label htmlFor="firstName">First Name</Label>
          <Input value="Test" id="firstName" />
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="lastName">Last Name</Label>
          <Input value="Test" id="lastName" />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="email">Last Name</Label>
          <Input value="Test" id="email" type="email" />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="password">Last Name</Label>
          <Input value="Test" type="password" id="password" />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="confirmPassword">Last Name</Label>
          <Input value="Test" type="password" id="confirmPassword" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </>
  );
};
