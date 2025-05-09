"use client";

import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteButton = () => {
  const session = useSession();

  const deleteUser = async () => {
    const res = await fetch("/api/user/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session?.data?.user?.email,
      }),
    });
    if (res.ok) {
      toast("User deleted successfully");
      await signOut({ redirect: true, callbackUrl: "/" });
    } else {
      toast("Failed to delete user");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-red-300 p-4 rounded-lg m-4 mt-8">
      <h1 className="text-2xl font-bold">Delete User</h1>
      <p className="mt-4 px-1 text-center text-gray-600">
        Press button below if you want to delete your profile.
      </p>
      <div className="mt-6">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
              Delete
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>本当に削除しますか?</AlertDialogTitle>
              <AlertDialogDescription>
                この動作は元に戻せません。アカウントは完全に削除され、データはサーバから削除されます。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>キャンセル</AlertDialogCancel>
              <AlertDialogAction>
                <button
                  onClick={deleteUser}
                  className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default DeleteButton;
