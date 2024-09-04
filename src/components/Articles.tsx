import { newsArticles } from "@/data"
import { apiArticle, article } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils";
import { fetchArticles } from "@/utils";
import HorizontalAds from "./HorizontalAds";
import Header from "./Header";

const Articles = async () => {
    // const data = await fetchArticles();
    // console.log(data)
  return (
    <section className="">
        <Header/>
        <main className="grid grid-cols-1 pb-10">
            {newsArticles.map((item:article) => {
                // const { title, id, body } = item
                const {title, brief,id, imageUrl, publishedDate, author, category} = item;
                return (
                    <Link href={`/article/${id}`} key={id} className="cursor-pointer block p-2 border-b border-secondary text-dark hover:bg-secondary transition-colors">
                        <div className="grid grid-cols-3 gap-2 hover:text-accent">
                            <h3 className="text-xl leading-tight font-medium font-primary capitalize">{title}</h3>
                            <p className="text-sm leading-tight">{brief}</p>
                            <Image 
                            width={200}
                            height={200}
                            src={imageUrl}
                            alt={title}
                            className="aspect-video object-cover object-center"
                            />
                        </div>
                        <div className="capitalize grid grid-cols-3 gap-2 text-sm mt-2">
                            <p className="font-semibold">{author}</p>
                            <p>{category}</p>
                            <p className="text-primary">{formatDate(publishedDate)}</p>
                        </div>
                    </Link>
                )
            })}
        </main>
        <HorizontalAds/>
    </section>
  )
}

export default Articles

// https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D