"use client";

import React, { FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axios.post("/api/auth/login", payload);

      toast({
        title: "Login was successful",
        description: data.toString(),
      });

      router.push("../hub/projects");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center w-[360px] text-sm">
        <p className="text-3xl font-semibold">Login into account</p>
        <p className="text-muted-foreground">
          Enter your email and password to login into account
        </p>
      </div>
      <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="grid gap-2">
            <Input id="email" type="email" placeholder="example@example.com" />
          </div>
          <div className="grid gap-2">
            <Input id="password" type="password" placeholder="password" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Button className="w-full" type="submit">
            Create account
          </Button>
          {/*TODO: Open this when you finish sign-up system*/}
          {/*<Link*/}
          {/*  href={"./sign-up"}*/}
          {/*  className={cn(buttonVariants({ variant: "link" }), "p-0")}*/}
          {/*>*/}
          {/*  <p className="text-muted-foreground font-light text-sm">*/}
          {/*    Don't have an account?*/}
          {/*  </p>*/}
          {/*</Link>*/}
        </div>
      </form>
    </div>
  );
};

export default Page;
