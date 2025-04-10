"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

type translationProps = {
  isJPToEN: boolean;
}

const Fetch = ({ isJPToEN }: translationProps) => {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  const ENDPOINT = "/api/deepl";

  const translateTo = (isJPToEN: boolean): string => isJPToEN ? "en-US" : "ja";

  const handleTranslate = async () => {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({text: input})
    });

    const data = await res.json();
    setTranslated(data.translated);
  }

  return (
    <>
      <div className="translation-input flex flex-1 justify-center">
        <div className="w-full bg-red-500 m-3">
          <Textarea
            placeholder="Type the text you want to translate."
            className="h-full border-0 md:text-3xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <Separator orientation="vertical" className="bg-black" />
        <div className="w-full bg-red-500 m-3 text-3xl">
          {translated}
        </div>
      </div>
      <Separator className="bg-black mb-3" />
      <div className="h-40 bg-yellow-300 mx-3">
        <Button className="bg-blue-500" onClick={handleTranslate}>Translate</Button>
      </div>
    </>
  );
};

export default Fetch;