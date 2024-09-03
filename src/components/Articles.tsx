import { newsArticles } from "@/data"
import { article } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils";
import { fetchArticles } from "@/utils";

const Articles = () => {
    const data = fetchArticles();
    // console.log(data)
  return (
    <section className="">
        <h2 className="font-bold text-xl uppercase mb-2 font-primary text-primary">Latest News</h2>
        <main className="grid grid-cols-1 pb-10">
            {newsArticles.map((item:article) => {
                const {title, briefDescription,id, imageUrl, publishedDate, author, category} = item;
                return (
                    <Link href={`/article/${id}`} key={id} className="cursor-pointer block p-2 border-b border-secondary text-dark hover:bg-secondary transition-colors">
                        <div className="grid grid-cols-3 gap-2 hover:text-accent">
                            <h3 className="text-xl leading-tight font-medium font-primary capitalize">{title}</h3>
                            <p className="text-sm leading-tight">{briefDescription}</p>
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
    </section>
  )
}

export default Articles