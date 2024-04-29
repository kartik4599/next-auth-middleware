"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import Biscuit from "js-cookie";
import { useRouter } from "next/navigation";

export function TabsDemo() {

  const router = useRouter();

  const submitForm = async (data: FormData) => {
    try {
      const name = data.get("name");
      const password = data.get("password");
      console.log({ name, password });
      const { data: response } = await axios.post("/api/auth", {
        name,
        password,
      });
      Biscuit.set("validate", response.validate);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Sign In</TabsTrigger>
        <TabsTrigger value="password">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <form action={submitForm}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="name" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  defaultValue="@peduarte"
                  type="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="username" defaultValue="@peduarte" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100/10">
      <TabsDemo />
    </div>
  );
};

export default page;
