import { comment } from "@/interface";
import { initials } from "@/utils";
import MotionDiv from "./MotionDiv";
const Comment = (data:comment) => {
    const { id, comment, username, timestamp } = data;

  return (
    <MotionDiv 
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0, transition:{duration:0.5}}}
    className="p-2 pb-4 flex gap-2 border-b">
        <div className="text-primary bg-secondary uppercase rounded-full size-10 flex items-center justify-center font-semibold">{initials(username)}</div>
        <div className="flex-1">
            <h3 className="mt-2 font-semibold capitalize text-gray-500">{username}</h3>
            <p className="mt-1">{comment}</p>
        </div>
    </MotionDiv>
  )
}
// We all put ourselves in this mess, now we will all go through this mess together, and maybe, just maybe we would wise up after this. I really hope soo.
export default Comment