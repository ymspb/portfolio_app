"use client";

import { TranslationProvider } from "@/context/TranslationProvider";
import Header from "./components/Header";
import Fetch from "./components/Fetch";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <TranslationProvider>
      <div className="bg-gray-100 h-full sm:p-5 md:p-10">
        <div className="translation-box bg-white h-full sm:p-5 md:p-10 flex flex-col">
          <Header />
          <Fetch />
        </div>
      </div>
    </TranslationProvider>
  );
};

export default page;
