"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { userService } from "@/services/user";

const formSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const Page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      await userService.registerUser(values);

      toast({
        title: "Registration was successful",
        description: `Welcome, ${values.username}`,
      });

      router.push("/auth/sign-in");
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Registration was unsuccessful",
          description: "Please, check your data",
        });
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-5"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Hyup" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
      </Form>
    </div>
  );
};

export default Page;
