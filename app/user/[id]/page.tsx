import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

export default async function profile({ params }: { params: { id: string }}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("user/log_in");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    }
  });
  if (!user) {
    notFound();
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}