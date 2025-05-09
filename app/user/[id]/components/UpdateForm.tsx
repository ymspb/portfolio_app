"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import formSchema from "@/schemas/form/update.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const UpdateForm = ({
  username: prevUsername,
  email: prevEmail,
}: {
  username: string;
  email: string;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: prevUsername,
      email: prevEmail,
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { username, email, password, newPassword } = values;
    const validPassword = (newPassword.length > 0) ? newPassword : password;
    const res = await fetch("/api/user/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prevEmail,
        email,
        username,
        password: validPassword,
      }),
    });
    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      toast("ユーザー情報の更新に失敗しました");
      return;
    }
    else {
      const newAuth = await signIn("credentials", {
        email,
        password: validPassword,
        redirect: false,
      });
      if (newAuth?.ok) {
        console.log("ユーザー情報を更新しました");
        toast("ユーザー情報を更新しました");
      } else {
        console.log("ユーザー情報の更新に失敗しました");
        toast("ユーザー情報の更新に失敗しました");
      }
    }
  };

  return (
    <div className="border rounded-lg p-3 bg-green-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>new username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="input your username"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>new email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="input your email"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>current password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="input current password"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>new password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="input your new password"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>confirm new password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="confirm new password"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-green-500">
            Update
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateForm;
