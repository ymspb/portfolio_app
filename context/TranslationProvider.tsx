'use client'

import { createContext, useState } from "react";
import React from "react";

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

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isJPToEN, setIsJPToEN] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [translated, setTranslated] = useState<string>("");

  return (
    <TranslationContext.Provider value={{ isJPToEN, setIsJPToEN, input, setInput, translated, setTranslated }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const TranslationContext = createContext<ContextType>(defaultContext);