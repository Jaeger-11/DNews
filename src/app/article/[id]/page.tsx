import { newsArticles } from "@/data";
import Image from "next/image";
import { formatDate } from "@/utils";
import Back from "@/components/Back";

const page = ({params}: {params: {id:string}}) => {
  const article  = newsArticles.find((item) => item.id.toString() === params.id)
  return (
    article ? 
    <article className="p-4 flex flex-col gap-3 mb-10">
      <Back/>
      
      <h3 className="text-[28px] font-bold font-primary md:w-3/4 text-dark">{article.title}</h3>
      <p>{article.category}</p>
      <div>
        <Image 
        width={600}
        height={600}
        src={article.imageUrl}
        alt={article.title}
        className="md:w-3/4"
        />
      </div>
      
      <div className="">
        <p className="flex justify-between items-center text-base mb-2"> <span className="font-semibold text-accent">{article.author}</span> <span>{formatDate(article.publishedDate)}</span> </p>
        <p>
          {article.tags.map((item) => {
            return <span className="p-1 bg-secondary mr-2 capitalize text-base">{item} </span>
          })}
        </p>
      </div>

      <p>{article.content} {article.content}</p>

      <section>
        {/* COMMENTS */}
      </section>
    </article>
    : undefined
  )
}

export default page