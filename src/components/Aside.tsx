import { newsArticles } from "@/data";
import { article } from "@/interface";
import Link from "next/link";
import VerticalAds from "./VerticalAds";

const Aside = () => {

  return (
    <aside className="p-4 bg-secondary min-h-[90svh]">
        <section>
            {/* Top Stories */}
            <h3 className="text-base text-primary font-semibold pb-2">Top Stories</h3>
            <ul className="flex flex-col gap-1 list-disc">
                {newsArticles.slice(0, 11).map((item:article) => {
                    return (
                    <li
                     key={item.id} className="text-sm xl:text-base leading-tight cursor-pointer text-dark hover:text-accent hover:font-medium transition-colors"> 
                     <Link href={`/article/${item.id}`}>{item.title} </Link> 
                    </li>
                )
                })}
            </ul>
        </section>
        <div className="my-8">
            <VerticalAds/>
        </div>
    </aside>
  )
}

export default Aside