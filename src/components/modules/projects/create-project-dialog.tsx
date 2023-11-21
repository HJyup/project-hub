"use client";

import React, { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PlusIcon } from "lucide-react";
import * as yup from "yup";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is required").max(30),
  description: yup.string().required("Description is required").max(100),
  deadline: yup.string().required("Deadline is required"),
});

const CreateProjectDialog = ({
  open,
  setOpen,
  onSubmit,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
  onSubmit: (values: {
    name: string;
    description: string;
    deadline: string;
  }) => void;
}) => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      deadline: "",
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn("flex gap-1 font-normal", buttonVariants({ size: "sm" }))}
      >
        <PlusIcon size="16px" />
        <p className="hidden md:block">Create a project</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new project</DialogTitle>
          <DialogDescription>
            This action create a new project, where you are able to store and
            organise tasks
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project name</FormLabel>
                  <FormControl>
                    <Input placeholder="finish project hub" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="project description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deadline</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="w-full mt-5">
              <Button className="w-full">Create a project</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;
