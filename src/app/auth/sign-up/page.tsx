"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const userSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsError(false);
      userSchema.parse(formData);

      const response = await fetch("../api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      console.log(response);
      if (response.ok) {
        toast({
          title: "Registration was successful",
          description: `Welcome, ${formData.email}`,
        });
        router.push("../auth/sign-in");
      } else {
        toast({
          title: "Registration was unsuccessful",
          description: "Please, check your data",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setIsError(true);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center w-[320px] md:w-[400px] text-sm">
        <p className="text-3xl font-semibold">Sign-up an account</p>
        <p className="text-muted-foreground">
          Enter your credentials to create a new account
        </p>
      </div>
      <form className="flex flex-col gap-5 mt-5" onSubmit={onSubmit}>
        <div className="flex flex-col gap-5">
          <div className="grid gap-2">
            <Label>Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="HJyup"
              value={formData.username}
              onChange={handleChange}
              isError={isError}
            />
          </div>
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              isError={isError}
            />
          </div>
          <div className="grid gap-2">
            <Label>Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              isError={isError}
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Button className="w-full">Create account</Button>
          <Link
            href={"./sign-in"}
            className={cn(buttonVariants({ variant: "link" }), "p-0")}
          >
            <p className="text-muted-foreground font-light text-sm">
              Already have an account?
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
