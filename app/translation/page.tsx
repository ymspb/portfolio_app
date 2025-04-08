'use client'

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const page: React.FC = () => {
  const [isJPToEN, setIsJPToEN] = useState(true);
  const getTargetAndResultLang = (isJPToEN: boolean): string => isJPToEN ? "Japanese" : "English";
  return (
    <div className="bg-gray-100 h-full sm:p-5 md:p-10">
      <div className="translation-box bg-white h-full sm:p-5 md:p-10">
        <div className="translation-header flex flex-col md:flex-row h-[48px]">
          <div className="h-auto w-full md:basis-5/11 text-2xl font-bold p-3 text-red-600">{getTargetAndResultLang(isJPToEN)}
          </div>
          <Separator orientation="vertical" className="bg-black"/>
          <div className="w-full md:basis-1/11 flex justify-center items-center" onClick={() => setIsJPToEN(prev => !prev)}>
            <Button className="border rounded-xs"><ArrowLeftRight /></Button>
          </div>
          <Separator orientation="vertical" className="bg-black"/>
          <div className="w-full md:basis-5/11 text-blue-600 text-2xl font-bold p-3">{getTargetAndResultLang(!isJPToEN)}</div>
        </div>
      </div>
    </div>
  );
}

export default page;