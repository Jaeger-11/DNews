import { newsArticles } from "@/data"
import { article } from "@/interface";
import Link from "next/link";
import Image from "next/image";

function BookmarkItem(data:{articleId:string}) {
    const bookmarked:article = newsArticles.find((item) => item.id.toString() === data.articleId) || {id: 0, title:'', publishedDate:'', author:'', brief:'', category:'', content:'', tags:['', ''], imageUrl:'' }

    return (
        <Link href={`/article/${bookmarked.id}`} key={bookmarked.id} className="cursor-pointer block p-2 border-b border-secondary text-dark hover:bg-secondary transition-colors">
        <div className="md:grid md:grid-cols-3 gap-2 hover:text-accent flex flex-col-reverse">
            <h3 className="text-xl leading-tight font-medium font-primary capitalize">{bookmarked.title}</h3>
            <p className="text-sm leading-tight hidden md:block">{bookmarked.brief +'...'}</p>
            <Image 
            width={200}
            height={200}
            src={bookmarked.imageUrl}
            alt={bookmarked.title}
            className="w-full md:w-4/5 aspect-video object-cover object-center"
            />
        </div>
        <div className="capitalize grid grid-cols-2 md:grid-cols-3 gap-2 text-sm mt-2">
            <p className="font-semibold">{bookmarked.author}</p>
            <p className="hidden md:block">{bookmarked.category}</p>
            <p className="text-primary text-right md:text-left">{bookmarked.publishedDate}</p>
        </div>
      </Link>
      )
}

export default BookmarkItem