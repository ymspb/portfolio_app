// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { email, password, username } = await req.json();

  // バリデーション
  if (!email || !password) {
    return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
  }

  // すでに登録済みか確認
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }

  // パスワードハッシュ化
  const hashedPassword = await bcrypt.hash(password, 10);

  // ユーザー作成
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: username,
    },
  });

  return NextResponse.json({ message: 'User created', userId: newUser.id });
}
