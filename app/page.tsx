import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-full mx-auto text-center flex flex-col justify-center">
      <h1 className="font-bold text-6xl my-3">Portfolio app</h1>
      <p className="text-2xl my-5">
        翻訳で検索した単語をその場で単語帳に保存し、後から見返せるWebアプリを作成しました。
        <br />
        単語帳の利用にはログインが必要ですが、翻訳はログインなしで利用できます。
      </p>
      <div className="buttons flex flex-row justify-center gap-15 mt-5">
        <div className="p-5">
          <Button asChild>
            <Link href="/login" className="bg-green-500">ログイン</Link>
          </Button>
        </div>
        <div className="p-5">
          <Button asChild>
            <Link href="/translate" className="bg-blue-400">翻訳へ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
