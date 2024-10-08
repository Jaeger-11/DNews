import Image from "next/image";
import { FetchArticle, FetchArticles, FetchComments } from "@/utils";
import Back from "@/components/Back";
import Layout from "@/components/Layout";
import { apiArticle } from "@/interface";
import InputComment from "@/components/InputComment";
import ApiComment from "@/components/ApiComment"; 
import FirebaseComments from "@/components/FirebaseComments";
import HorizontalAds from "@/components/HorizontalAds";
import Bookmark from "@/components/Bookmark";
import { shuffleArticle } from "@/utils";
import ApiArticle from "@/components/ApiArticle";
import { randomImages } from "@/data";
import Share from "@/components/Share";

const page = async ({params}: {params: {id:string}}) => {
    const newsArticles:apiArticle[] = await FetchArticles();
    const article:apiArticle = await FetchArticle(params.id);
    const otherArticles = newsArticles.filter((i) => i.title !== article?.title)
    const comments = await FetchComments(params.id);
    const imageUrl = randomImages[Math.floor(Math.random() * randomImages.length)];
  
  return (
    <Layout>
      {article ? 
      <article className="p-2 md:p-4 flex flex-col gap-3 mb-4">
        <Back cancel={false}/>
        
        <h3 className="text-[28px] xl:text-4xl capitalize font-bold font-primary md:w-3/4 text-dark">{article.title}</h3>
        <p>{'World'}</p>
        <div>
          <Image 
          width={600}
          height={600}
          src={imageUrl}
          alt={article.title}
          className="md:w-3/4 aspect-video object-cover object-center"
          />
        </div>
        
        <div className="">
          <p className="flex justify-between items-center text-base mb-2"> 
            <span className="font-semibold text-primary">{'Falodun Oluwadamilola'}</span>
            <span className="text-sm xl:text-base text-primary">{'23rd August 2024'}</span> 
          </p>
        </div>

        <p className="xl:text-base first-letter:uppercase">{article.body}, {article.body}, {article.body}.</p>

        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <Share/>
          <Bookmark id={params.id}/>
        </div>

        <section>
          {/* COMMENTS */}
          <h2 className="text-xl xl:text-2xl font-primary uppercase font-semibold text-primary mb-2">Comments</h2>
          <InputComment id={params.id}/>

          <section className="my-2 border-t">
            <FirebaseComments id={`${params.id}`}/>
            { comments.length > 0 ?
              comments.map((item:{name:string, body:string, id:number}) => {
                return <ApiComment{...item} key={item.id}/>
              }) : 
              <h3 className="font-semibold capitalize mt-4 xl:text-base">No Comments yet, be the first!</h3>
            }
          </section>
        </section>

        <section>
        <h2 className="text-xl xl:text-2xl font-primary uppercase font-semibold text-primary mb-2">Similar Articles</h2>
        <section>
          {shuffleArticle(otherArticles).map((item:apiArticle) => {
            return <ApiArticle {...item} key={item.id}/>
          })}
        </section>
      </section>
      </article>
      : undefined
    }
    <HorizontalAds bg="transparent"/>
    </Layout>
  )
}

export default page