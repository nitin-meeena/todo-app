import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex justify-center w-screen mb-[100px] pt-4 fixed bg-white">
        <h2 className="text-4xl font-serif font-black text-purple-800 underline">
          Todo <span className="text-blue-700">List</span>
        </h2>
      </div>
      <div className="mt-[100px]">
        <Card />
      </div>
    </main>
  );
}
