import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const page: React.FC = () => {

  const session = getServerSession(authOptions);
  if (!session) {
    redirect("user/log_in");
  }
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}
export default page;