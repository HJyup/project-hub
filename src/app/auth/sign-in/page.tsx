"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import * as yup from "yup";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils/cn";

const formSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      toast({
        title: "Sign-in was unsuccessful",
        description: "Please, check your email and password",
      });
    } else {
      toast({
        title: "Sign-in was successful",
      });

      router.push("/hub/projects");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center w-[320px] md:w-[400px] text-sm">
        <p className="text-3xl font-semibold">Sign-in an account</p>
        <p className="text-muted-foreground">
          Enter your credentials to sign-in into account
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col items-end gap-2 mt-5">
            <Button className="w-full" type="submit">
              Sign-in
            </Button>
            <Link
              href={"./sign-up"}
              className={cn(buttonVariants({ variant: "link" }), "p-0")}
            >
              <p className="text-muted-foreground font-light text-sm">
                Don't have an account?
              </p>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
