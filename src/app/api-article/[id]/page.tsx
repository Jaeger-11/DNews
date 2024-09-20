import Image from "next/image";
import { FetchArticle, FetchComments } from "@/utils";
import Back from "@/components/Back";
import Layout from "@/components/Layout";
import { apiArticle } from "@/interface";
import InputComment from "@/components/InputComment";
import ApiComment from "@/components/ApiComment"; 
import FirebaseComments from "@/components/FirebaseComments";
import HorizontalAds from "@/components/HorizontalAds";
import Bookmark from "@/components/Bookmark";

const page = async ({params}: {params: {id:string}}) => {
    const article:apiArticle = await FetchArticle(params.id);
    const comments = await FetchComments(params.id)
  
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
          src={'https://images.unsplash.com/photo-1616164942261-243e6209c40f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGljbGVzJTIwY2xpbWF0ZXxlbnwwfDB8MHx8fDA%3D'}
          alt={article.title}
          className="md:w-3/4 aspect-video object-cover object-center"
          />
        </div>
        
        <div className="">
          <p className="flex justify-between items-center text-base mb-2"> 
            <span className="font-semibold text-accent">{'Falodun Oluwadamilola'}</span>
            <span className="text-sm xl:text-base text-primary">{'23rd August 2024'}</span> 
          </p>
          <p>
            {/* {article.tags.map((item) => {
              return <span key={item} className="p-1 bg-secondary mr-2 capitalize text-sm text-primary">{item} </span>
            })} */}
          </p>
        </div>

        <p className="xl:text-base">{article.body} {article.body}</p>

        <Bookmark id={params.id}/>

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
      </article>
      : undefined
    }
    <HorizontalAds bg="transparent"/>
    </Layout>
  )
}

export default page