import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { userId, japanese, english } = await req.json();
  const newWord = await prisma.word.create({
    data: {
      userId,
      japanese,
      english,
    },
  });
  if (!newWord) {
    return new Response(JSON.stringify({ error: "Failed to create word" }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify(newWord), { status: 201 });
}