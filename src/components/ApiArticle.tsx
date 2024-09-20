import Image from "next/image";
import Link from "next/link";
import { apiArticle } from "@/interface";
import MotionDiv from "./MotionDiv";
import { randomImages } from "@/data";

const ApiArticle = ({ id, title, body}:apiArticle) => {
  const imageUrl = randomImages[Math.floor(Math.random() * randomImages.length)];
  return (
    <MotionDiv
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0, transition:{duration:0.5}}}
    viewport={{once:true}}
    >
      <Link href={`/api-article/${id}`} key={id} className="cursor-pointer block p-2 border-b border-secondary text-dark hover:bg-secondary transition-colors">
        <div className="md:grid md:grid-cols-3 gap-2 hover:text-accent flex flex-col-reverse">
            <h3 className="text-xl xl:text-2xl leading-tight font-semibold font-primary capitalize">{title}</h3>
            <p className="text-sm xl:text-base leading-tight hidden md:block">{body.slice(0,100)+'...'}</p>
            <Image 
            width={200}
            height={200}
            src={imageUrl}
            alt={title}
            className="w-full md:w-4/5 aspect-video object-cover object-center"
            />
        </div>
        <div className="capitalize grid grid-cols-2 md:grid-cols-3 gap-2 text-sm xl:text-base mt-4 mb-2 md:mt-2">
            <p className="font-semibold">{'Falodun Damilola'}</p>
            <p className="hidden md:block">{'World'}</p>
            <p className="text-primary text-right md:text-left">{'23rd-August-2024'}</p>
        </div>
      </Link>
    </MotionDiv>
  )
}

export default ApiArticle;