import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export default async function profile({ params }: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  console.dir(params)
  console.log(typeof id)
  if (!session) {
    redirect("user/log_in");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    notFound();
  }
  return (
    <div className="grid gird-cols-3 gap-4">
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-2xl mt-3">
          {user.name || "名称未設定"}のプロフィール
        </h1>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
