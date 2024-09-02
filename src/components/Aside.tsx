import { newsArticles } from "@/data";
import { article } from "@/interface";
import Link from "next/link";
import VerticalAds from "./VerticalAds";

const Aside = () => {

    const topStoriesTitles = [
        "Breaking: Major Earthquake Hits City, Thousands Affected",
        "Global Leaders Meet for Climate Summit, Urgent Actions Discussed",
        "Tech Giant Unveils Revolutionary AI Technology",
        "Record-Breaking Heatwave Sweeps Across the Region",
        "Economic Forecast: Experts Predict Market Surge",
        "Celebrity Power Couple Announces Surprise Engagement",
        "Groundbreaking Medical Study Reveals New Treatment for Cancer",
        "National Election Results: New Government Takes Office",
        "Historic Space Mission Successfully Lands on Mars",
        "Sports Team Wins Championship in Stunning Finale"
      ];

  return (
    <div className="p-4 bg-secondary min-h-[90svh]">
        <section>
            {/* Top Stories */}
            <h3 className="text-base text-primary font-semibold pb-2">Top Stories</h3>
            <ul className="flex flex-col gap-1 list-disc px-2">
                {newsArticles.slice(0, 11).map((item:article) => {
                    return (
                    <li key={item.id} className="text-sm leading-tight cursor-pointer text-dark hover:text-accent hover:font-medium transition-colors"> 
                     <Link href={`/article/${item.id}`}>{item.title} </Link> 
                    </li>
                )
                })}
            </ul>
        </section>
        <div className="my-8">
            <VerticalAds/>
        </div>
    </div>
  )
}

export default Aside