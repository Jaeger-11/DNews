"use client";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { db } from "@/database/config";
import { getBookmarks } from "@/database/useFirestore";

const Bookmark = (data:{id:string}) => {
    let { bookmarks } = getBookmarks();
    const { uid } = useAppSelector((state) => state.user);
    const [message, setMessage] = useState({text:'', success:false})

    const bookmarkArticle = async () => {
        setMessage({text:'', success:false});
        if(!uid){
            setMessage({
                text: `Bookmarks are limited to registered users. Please sign in or create an account.`,
                success: false
            })
        } else if(bookmarks?.filter((item) => item.articleId === data.id).length > 0){
            setMessage({
                text: `Already bookmarked, check your profile to view...`,
                success: false
            })
        } else {
            try {
            await updateDoc(doc(db, 'users', uid), {
                bookmarks: arrayUnion({articleId: data.id})
            });
            setMessage({
                text: `Article Bookmarked, Check your profile to view bookmarks...`,
                success: true
            })
            } catch (e) {
                console.error("Error adding document: ", e);
                setMessage({
                    text: `Error Occured...`,
                    success: false
                })
            }
        }
        setTimeout(() => {
            setMessage({text:'', success:false})
        }, 5000);
    }

  return (
    <div className="flex items-end flex-col gap-1">
        <button onClick={bookmarkArticle} className="capitalize p-1 px-3 rounded-sm text-primary transition font-semibold bg-secondary border border-primary font-primary w-max hover:bg-primary hover:text-secondary">Bookmark this article</button>
        <p className={`${message.success ? 'text-green-500' : 'text-red-500'} font-medium italic text-sm`}>{message.text}</p>
    </div>
  )
}

export default Bookmark