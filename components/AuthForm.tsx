"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { aboutformSchema } from "@/lib/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import AuthCustominput from "@/components/AuthCoustomInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "@/components/ui/checkbox";

const AuthForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof aboutformSchema>>({
    resolver: zodResolver(aboutformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof aboutformSchema>) => {};

  return (
    <Card className="w-[350px] md:w-[450px] lg:w-[450px]">
      <CardHeader>
        <CardTitle className="text-center">Admin Login</CardTitle>
        <CardDescription className="text-center py-4">
          Access Dashboard You Need to login.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <AuthCustominput
              type="email"
              name="name"
              control={form.control}
              placeholder="Bhavishya Tripathi"
              label="Enter Email"
            />
            <AuthCustominput
              type="password"
              name="password"
              control={form.control}
              placeholder="Password"
              label="Enter Password"
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="block">
        <div className="flex items-center space-x-2 mb-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Remember me</Label>
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
