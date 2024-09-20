"use client"
import { useAppSelector } from "@/lib/hooks";
import LogOut from "./LogOut";
import BookmarkItem from "./BookmarkItem";
import HorizontalAds from "./HorizontalAds";
import { useState, useEffect } from "react";
import { db } from "@/database/config";
import { onSnapshot, doc } from "firebase/firestore";
import axios from "axios";
import { apiArticle } from "@/interface";
import ApiArticle from "./ApiArticle";

const UserProfile = () => {
    const { username, email, uid } = useAppSelector((state) => state.user);
    const [ bookmarks, setBookmarks ] = useState<{articleId:string}[]>([])

    const runGet = () => {
        if(uid.length > 0){
            onSnapshot(doc(db, "users", uid), (doc) => {
                setBookmarks(doc.data()?.bookmarks);
            });
        }
    }
    
    useEffect(() => {
        runGet();
    }, [uid, runGet])

    const fetchBookmark = (id:string) => {
        let info = {}
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(data => 
            info = data.data
        )
        .catch(error => console.log(error))
        return info;
    }

  return (
    <section className="p-2">
        <div className="flex items-center gap-2">
            <div className="w-max rounded-md flex justify-center items-center p-3 border bg-secondary">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#000000"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#000000"></path> </g></svg>
            </div>
            <article className="leading-tight">
                <h3 className=" font-primary font-semibold capitalize text-xl leading-tight">{username}</h3>
                <p className="text-primary">{email}</p>
            </article>
        </div>
        <div className="mt-2"> <LogOut/> </div>

        <section className="my-4 mt-8 border-t">
            <h3 className="font-primary text-2xl font-semibold text-primary my-4">Your Bookmarks</h3>
            <div>
                {bookmarks.length > 0 && bookmarks.map((id:{articleId:string}) => {
                    return ( 
                        <BookmarkItem articleId={id.articleId} key={id.articleId}/>
                    )
                })}
            </div>
        </section>
        <HorizontalAds bg="transparent"/>
    </section>
  )
}

export default UserProfile