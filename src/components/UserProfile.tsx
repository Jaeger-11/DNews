"use client"
import { getBookmarks } from "@/database/useFirestore";
import { useAppSelector } from "@/lib/hooks";
import LogOut from "./LogOut";

const UserProfile = () => {
    const { bookmarks } = getBookmarks();
    const { username, email } = useAppSelector((state) => state.user);

  return (
    <section className="p-2">
        <div className="flex items-center gap-2">
            <div className="w-max rounded-md flex justify-center items-center p-3 border bg-secondary">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#000000"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#000000"></path> </g></svg>
            </div>
            <article className="leading-tight">
                <h3 className=" font-primary font-semibold capitalize text-xl leading-tight">{username}</h3>
                <p className="text-primary">{email}</p>
            </article>
        </div>
        <p className="mt-2"> <LogOut/> </p>

        <section className="my-4">
            <h3 className="font-primary text-2xl font-semibold text-primary">Your Bookmarks</h3>
            <div>
                {bookmarks.map((id:{articleId:string}) => {
                    return ( 
                        <div>{id.articleId}</div>
                    )
                })}
            </div>
        </section>
    </section>
  )
}

export default UserProfile