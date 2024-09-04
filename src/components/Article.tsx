import Image from "next/image";
import Link from "next/link";
import { article } from "@/interface";
import { formatDate } from "@/utils";

const Article = ({imageUrl, id, title, brief, author, category, publishedDate}:article) => {
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
}

export default Article;