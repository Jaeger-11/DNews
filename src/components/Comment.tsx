import { comment } from "@/interface"
const Comment = (data:comment) => {
    const { id, comment, username, timestamp } = data;

    const initials = () => {
        let splitted = username.split(' ');
        let letters = `${splitted[0][0]}${splitted[1][0]}`
        return letters
    }
  return (
    <article className="p-2 pb-4 flex gap-2 border-b">
        <div className="text-primary bg-secondary uppercase rounded-full size-10 flex items-center justify-center font-semibold">{initials()}</div>
        <div className="flex-1">
            <h3 className="mt-2 font-semibold capitalize text-gray-500">{username}</h3>
            <p className="mt-1">{comment}</p>
        </div>
    </article>
  )
}
// We all put ourselves in this mess, now we will all go through this mess together, and maybe, just maybe we would wise up after this. I really hope soo.
export default Comment