import { initials } from "@/utils"
const ApiComment = (data:{name:string, body:string}) => {
    
  return (
    <article className="p-2 pb-4 flex gap-2 border-b">
    <div className="text-primary bg-secondary uppercase rounded-full size-10 flex items-center justify-center font-semibold">{initials(data.name)}</div>
    <div className="flex-1">
        <h3 className="mt-2 font-semibold capitalize text-gray-500">{data.name}</h3>
        <p className="mt-1">{data.body}</p>
    </div>
</article>
  )
}

export default ApiComment