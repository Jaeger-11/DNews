import { newsArticles } from "@/data";
import Image from "next/image";
import { formatDate } from "@/utils";
import Back from "@/components/Back";
import Layout from "@/components/Layout";

const page = ({params}: {params: {id:string}}) => {
  const article  = newsArticles.find((item) => item.id.toString() === params.id)
  return (
    <Layout>
      {article ? 
      <article className="p-4 flex flex-col gap-3 mb-10">
        <Back cancel={false}/>
        
        <h3 className="text-[28px] font-bold font-primary md:w-3/4 text-dark">{article.title}</h3>
        <p>{article.category}</p>
        <div>
          <Image 
          width={600}
          height={600}
          src={article.imageUrl}
          alt={article.title}
          className="md:w-3/4 aspect-video object-cover object-center"
          />
        </div>
        
        <div className="">
          <p className="flex justify-between items-center text-base mb-2"> 
            <span className="font-semibold text-accent">{article.author}</span> 
            <span className="text-sm text-primary">{formatDate(article.publishedDate)}</span> 
          </p>
          <p>
            {article.tags.map((item) => {
              return <span className="p-1 bg-secondary mr-2 capitalize text-sm text-primary">{item} </span>
            })}
          </p>
        </div>

        <p>{article.content} {article.content}</p>

        <section>
          {/* COMMENTS */}
          <h2 className="text-xl font-primary uppercase font-semibold text-primary mb-2">Comments</h2>
          <div className="w-2/3 p-2 border rounded-md">
            <input type="text" name="" id="" placeholder="Add your opinion / comment"  className="w-full border-none placeholder:text-base text-primary outline-none bg-transparent"/>
          </div>
        </section>
      </article>
      : undefined}
    </Layout>
  )
}

export default page