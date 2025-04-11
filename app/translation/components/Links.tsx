'use client'

import { Button } from "@/components/ui/button";

type translationProps = {
  input: string;
  isJPToEN: boolean;
  setTranslated: React.Dispatch<React.SetStateAction<string>>
}

const Links = ({input, isJPToEN, setTranslated}: translationProps) => {
  const getSourceAndTargetLang = (isJPToEN: boolean): {source: string; target: string;} => {
    if (isJPToEN) {
      return {source: 'ja', target: 'en-US'}
    }
    else return {source: 'en', target: 'ja'}
  }
  const ENDPOINT = "/api/deepl";

  const handleTranslate = async () => {
    const sourceAndTargetLang = getSourceAndTargetLang(isJPToEN);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input,
        translateFrom: sourceAndTargetLang.source,
        translateTo: sourceAndTargetLang.target,
      })
    });

    const data = await res.json();
    console.log(data);
    setTranslated(data.translated);
  };
  return (
    <div className="h-40 bg-yellow-300 mx-3">
      <Button className="bg-blue-500" onClick={handleTranslate}>
        Translate
      </Button>
    </div>
  );
};

export default Links;