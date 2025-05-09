import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import UpdateForm from "./components/UpdateForm";
import DeleteButton from "./components/DeleteButton";

export default async function profile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  // console.log(id);
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
  const username = user.name || "名称未設定";
  const email = user.email || "メールアドレス未設定";

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-amber-500 flex flex-col items-center">
        <p>サイドバー</p>
      </div>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-2xl mt-3">
          {username}のプロフィール
        </h1>
        <p>{user.email}</p>
      </div>
      <div className="flex flex-col items-center border-l">
        <p className="text-lg font-bold my-3">ユーザー情報の編集</p>
          <UpdateForm username={username} email={email}/>
          <DeleteButton />
      </div>
    </div>
  );
}
