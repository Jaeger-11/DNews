import { newsArticles, articleComments } from "@/data";
import Image from "next/image";
import { formatDate } from "@/utils";
import Back from "@/components/Back";
import Layout from "@/components/Layout";
import Comment from "@/components/Comment";
import { comment } from "@/interface";
import InputComment from "@/components/InputComment";
import HorizontalAds from "@/components/HorizontalAds";
import Bookmark from "@/components/Bookmark";
import FirebaseComments from "@/components/FirebaseComments";
import MotionDiv from "@/components/MotionDiv";

const page = ({params}: {params: {id:string}}) => {
  const article  = newsArticles.find((item) => item.id.toString() === params.id);
  console.log(article)
  let comments:comment[] = []
  
  const FetchComments = () => {
    articleComments.map((item) => {
      if(item.articleId.toString() === params.id){
        comments.push(item);
      }
    })
  }

  FetchComments();
  
  return (
    <Layout>
      {article ? 
      <MotionDiv
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0, transition:{duration:0.5}}}
       className="p-2 md:p-4 flex flex-col gap-3 mb-10">
        <Back cancel={false}/>
        
        <h3 className="text-[28px] capitalize font-bold font-primary md:w-3/4 text-dark">{article.title}</h3>
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
              return <span key={item} className="p-1 bg-secondary mr-2 capitalize text-sm text-primary">{item} </span>
            })}
          </p>
        </div>

        <p>{article.content} {article.content}</p>

        <Bookmark id={params.id}/>

        <section>
          {/* COMMENTS */}
          <h2 className="text-xl font-primary uppercase font-semibold text-primary mb-2">Comments</h2>
          <InputComment id={params.id}/>

          <section className="my-2 border-t">
            { comments.length > 0 ?
              comments.map((item:comment) => {
                return <Comment{...item} key={item.id}/>
              }) : 
              <h3 className="font-semibold capitalize mt-4">No Comments yet, be the first!</h3>
            }
            <FirebaseComments id={`${params.id}`}/>
          </section>
        </section>
      </MotionDiv>
      : undefined
    }
    <HorizontalAds bg="transparent"/>
    </Layout>
  )
}

export default page