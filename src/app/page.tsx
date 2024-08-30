import Articles from "@/components/Articles";
import TrendingSlide from "@/components/TrendingSlide";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-2">
      {/* <h2 className=" capitalize font-semibold text-base">Trending</h2> */}
      <TrendingSlide/>
      <Articles/>
    </main>
  );
}
