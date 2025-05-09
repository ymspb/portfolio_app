'use client'

import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";


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
      })
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
      <p className="mt-4 px-1 text-center text-gray-600">Press button below if you want to delete your profile.</p>
      <div className="mt-6">
        <button onClick={deleteUser} className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteButton;