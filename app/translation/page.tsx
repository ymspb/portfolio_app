'use client'

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Header from "./components/Header"
import { useState } from "react";

const page: React.FC = () => {

  const [val, setVal] = useState('');

  return (
    <div className="bg-gray-100 h-full sm:p-5 md:p-10">
      <div className="translation-box bg-white h-full sm:p-5 md:p-10 flex flex-col">
        <Header />
        <div className="translation-input flex flex-1 justify-center">
          <div className="w-full bg-red-500 m-3">
            <Textarea
              placeholder="Type words or sentences you want to translate."
              className="h-full border-0 md:text-3xl"
              value={val}
              onChange={e => setVal(e.target.value)}
              />
          </div>
          <Separator orientation="vertical" className="bg-black"/>
          <div className="w-full bg-red-500 m-3 text-3xl"></div>
        </div>
        <Separator className="bg-black mb-3"/>
        <div className="h-40 bg-yellow-300 mx-3"></div>
      </div>
    </div>
  );
}

export default page;