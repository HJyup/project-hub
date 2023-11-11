import React from "react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center w-[360px] text-sm">
        <p className="text-3xl font-semibold">Create an account</p>
        <p className="text-muted-foreground">
          Enter your email and password to create account
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid gap-2">
          <Input id="email" type="email" placeholder="example@example.com" />
        </div>
        <div className="grid gap-2">
          <Input id="password" type="password" placeholder="password" />
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <Button className="w-full">Create account</Button>
        <Link
          href={"./login"}
          className={cn(buttonVariants({ variant: "link" }), "p-0")}
        >
          <p className="text-muted-foreground font-light text-sm">
            Already have an account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
