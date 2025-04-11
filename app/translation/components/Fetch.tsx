"use client";

import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Links from "./Links"

type translationProps = {
  isJPToEN: boolean;
}

const Fetch = ({ isJPToEN }: translationProps) => {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

  return (
    <>
      <div className="translation-input flex flex-1 justify-center">
        <div className="w-full bg-gray-100 m-3">
          <Textarea
            placeholder="Type the text you want to translate."
            className="h-full border-0 md:text-3xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <Separator orientation="vertical" className="bg-black" />
        <div className="w-full bg-gray-100 m-3 p-2 text-3xl">
          {translated}
        </div>
      </div>
      <Separator className="bg-black mb-3" />
      <Links input={input} isJPToEN={isJPToEN} setTranslated={setTranslated}/>
    </>
  );
};

export default Fetch;