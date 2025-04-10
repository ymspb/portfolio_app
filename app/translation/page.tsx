"use client";

import { useState } from "react";
import Header from "./components/Header";
import Fetch from "./components/Fetch";
const page: React.FC = () => {
  const [isJPToEN, setIsJPToEN] = useState<boolean>(true);
  return (
    <div className="bg-gray-100 h-full sm:p-5 md:p-10">
      <div className="translation-box bg-white h-full sm:p-5 md:p-10 flex flex-col">
        <Header isJPToEN={isJPToEN} setIsJPToEN={setIsJPToEN}/>
        <Fetch isJPToEN={isJPToEN}/>
      </div>
    </div>
  );
};

export default page;
