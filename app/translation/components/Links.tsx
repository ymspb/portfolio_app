"use client";

import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { TranslationContext } from "@/context/TranslationProvider";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const Links = () => {
  const session = useSession();
  const context = useContext(TranslationContext);
  const { input, isJPToEN, setTranslated, translated } = context;
  const getSourceAndTargetLang = (
    isJPToEN: boolean
  ): { source: string; target: string } => {
    if (isJPToEN) {
      return { source: "ja", target: "en-US" };
    } else return { source: "en", target: "ja" };
  };
  const ENDPOINT = "/api/deepl";
  const WORDBOOK_URI = "api/words";

  const handleTranslate = async () => {
    const sourceAndTargetLang = getSourceAndTargetLang(isJPToEN);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input,
        translateFrom: sourceAndTargetLang.source,
        translateTo: sourceAndTargetLang.target,
      }),
    });

    const data = await res.json();
    setTranslated(data.translated);
  };

  const judgeJPAndEN = (isJPToEN: boolean) =>
    isJPToEN
      ? { japanese: input, english: translated }
      : { japanese: translated, english: input };

  const handleSaveWord = async () => {
    const { japanese, english } = judgeJPAndEN(isJPToEN);
    const res = await fetch(WORDBOOK_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        japanese,
        english,
        userId: session.data?.user.id,
      }),
    });
    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error);
      return;
    } else {
      const { message } = await res.json();
      toast.success(message);
    }
  };
  return (
    <div className="h-40 bg-gray-100 mx-3 flex justify-evenly">
      <Button className="bg-blue-400 my-auto" onClick={handleTranslate}>
        Translate
      </Button>
      {session && session.status === "authenticated" ? (
        <Button className="bg-red-400 my-auto" onClick={handleSaveWord}>
          Save to wordbook
        </Button>
      ) : null}
    </div>
  );
};

export default Links;
