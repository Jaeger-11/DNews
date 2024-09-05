import Image from "next/image";
import Link from "next/link";
import { apiArticle } from "@/interface";
import { formatDate } from "@/utils";

const ApiArticle = ({ id, title, body}:apiArticle) => {
  return (
  <Link href={`/api-article/${id}`} key={id} className="cursor-pointer block p-2 border-b border-secondary text-dark hover:bg-secondary transition-colors">
    <div className="grid grid-cols-3 gap-2 hover:text-accent">
        <h3 className="text-xl leading-tight font-medium font-primary capitalize">{title}</h3>
        <p className="text-sm leading-tight">{body.slice(0,100)+'...'}</p>
        <Image 
        width={200}
        height={200}
        src={'https://images.unsplash.com/photo-1616164942261-243e6209c40f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGljbGVzJTIwY2xpbWF0ZXxlbnwwfDB8MHx8fDA%3D'}
        alt={title}
        className="aspect-video object-cover object-center"
        />
    </div>
    <div className="capitalize grid grid-cols-3 gap-2 text-sm mt-2">
        <p className="font-semibold">{'Falodun Damilola'}</p>
        <p>{'World'}</p>
        <p className="text-primary">{'23rd-August-2024'}</p>
    </div>
  </Link>
  )
}

export default ApiArticle;