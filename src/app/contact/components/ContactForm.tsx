"use client";

import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaContact, SchemaContact } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/molecules";
import { sendMessage } from "@/services";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/atoms";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function ContactForm() {
  const form = useForm<SchemaContact>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schemaContact),
    mode: "onChange",
  });
  const { isSubmitting } = form.formState;

  const onSubmit = async (values: SchemaContact) => {
    const result = await sendMessage(values);

    if (result.error) {
      toast.error("Failed", { description: result.error });
      return;
    }
    toast.success("Success", { description: result.success });
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-3">
          <div className="grid lg:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Input your name." {...field} />
                  </FormControl>
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
                    <Input placeholder="Input your email." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className={clsx(
            "flex justify-center place-self-center w-1/2 md:place-self-end md:w-1/3 bg-neutral-800 py-2.5 hover:scale-[101%] hover:bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-950 hover:dark:bg-neutral-50"
          )}
          loading={isSubmitting}
        >
          <Send className="size-4 mr-2" /> Send
        </Button>
      </form>
    </Form>
  );
}
