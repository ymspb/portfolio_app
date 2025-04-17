"use client";

import { createContext, useState } from "react";
import Header from "./components/Header";
import Fetch from "./components/Fetch";

type stateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

type ContextType = {
  isJPToEN: boolean;
  setIsJPToEN: stateSetter<boolean>;
  input: string;
  setInput: stateSetter<string>;
  translated: string;
  setTranslated: stateSetter<string>;
}

const defaultContext = {
  isJPToEN: true,
  setIsJPToEN: () => {},
  input: "",
  setInput: () => {},
  translated: "",
  setTranslated: () => {}
}

export const TranslationContext = createContext<ContextType>(defaultContext);

const page: React.FC = () => {
  const [isJPToEN, setIsJPToEN] = useState<boolean>(true);
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  return (
    <TranslationContext.Provider value={{isJPToEN, setIsJPToEN, input, setInput, translated, setTranslated}}>
      <div className="bg-gray-100 h-full sm:p-5 md:p-10">
        <div className="translation-box bg-white h-full sm:p-5 md:p-10 flex flex-col">
          <Header />
          <Fetch />
        </div>
      </div>
    </TranslationContext.Provider>
  );
};

export default page;
