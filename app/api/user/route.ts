// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { signIn } from 'next-auth/react';

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

export async function PATCH(req: Request) {
  const { prevEmail, email, password, username } = await req.json();
  console.log(prevEmail, email, password, username);

  // バリデーション
  if ( !prevEmail || !email || !password || !username) {
    console.log('Missing fields');
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // すでに登録済みか確認(メールアドレスが更新されていた場合のみ)
  if (prevEmail !== email) {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }}

  // パスワードハッシュ化
  const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await prisma.user.update({
      where: { email: prevEmail },
      data: {
        email,
        password: hashedPassword,
        name: username,
      },
    });
  if (!updatedUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  console.log('user updated', updatedUser);

  return NextResponse.json({ message: 'User updated', userId: updatedUser.id });
}

export async function DELETE(req: Request) {
  const { email } = await req.json();

  // バリデーション
  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 });
  }

  // ユーザー削除
  const deletedUser = await prisma.user.delete({
    where: { email },
  });

  if (!deletedUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  console.log('user deleted');

  return NextResponse.json({ message: 'User deleted' });
}