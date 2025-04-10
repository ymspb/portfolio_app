import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type translationProps = {
  isJPToEN: boolean;
  setIsJPToEN: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isJPToEN, setIsJPToEN }: translationProps) => {
  const getTargetAndResultLang = (isJPToEN: boolean): string =>
    isJPToEN ? "Japanese" : "English";
  return (
    <div>
      <div className="translation-header flex flex-row h-[48px] mb-3">
        <div className="h-auto w-full md:basis-5/11 text-2xl font-bold p-3 text-red-600">
          {getTargetAndResultLang(isJPToEN)}
        </div>
        <Separator orientation="vertical" className="bg-black" />
        <div
          className="w-full md:basis-1/11 flex justify-center items-center"
          onClick={() => setIsJPToEN((prev) => !prev)}
        >
          <Button className="border rounded-xs">
            <ArrowLeftRight />
          </Button>
        </div>
        <Separator orientation="vertical" className="bg-black" />
        <div className="w-full md:basis-5/11 text-blue-600 text-2xl font-bold p-3">
          {getTargetAndResultLang(!isJPToEN)}
        </div>
      </div>
      <Separator className="bg-black" />
    </div>
  );
};

export default Header;
