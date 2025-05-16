"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Word = {
  id: string;
  japanese: string;
  english: string;
};

const WordList = ({ words }: { words: Word[] }) => {
  const [wordList, setWordList] = useState<Word[]>(words);
  
  const handleDelete = async (id: string) => {
    const res = await fetch("/api/words", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error);
      return;
    } else {
      setWordList((prev) => prev.filter((word) => word.id !== id));
      const { message } = await res.json();
      toast.success(message);
    }
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <table className="border-collapse border border-gray-400 m-3">
        <thead>
          <tr>
            <th className="border border-gray-300 p-3">Japanese</th>
            <th className="border border-gray-300 p-3">English</th>
            <th className="border border-gray-300 p-3"></th>
          </tr>
        </thead>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td className={`border border-gray-300 p-3`}>{word.japanese}</td>
              <td className={`border border-gray-300 p-3`}>{word.english}</td>
              <td className={`border border-gray-300 p-3`}>
                <Button
                  className={`border border-gray-300 p-3 bg-red-400`}
                  onClick={() => handleDelete(word.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordList;
