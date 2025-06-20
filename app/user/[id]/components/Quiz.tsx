"use client";

import { Button } from "@/components/ui/button";

const Quiz = () => {
  return (
    <div className="flex">
      <Button className="bg-blue-500 text-white hover:bg-blue-600 ">
        日英クイズ
      </Button>
      <Button>クイズに挑戦</Button>
    </div>
  );
};

export default Quiz;
