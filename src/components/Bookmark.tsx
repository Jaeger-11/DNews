"use client";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { db } from "@/database/config";

const Bookmark = (data:{id:string}) => {
    const { uid } = useAppSelector((state) => state.user);
    const [message, setMessage] = useState({text:'', success:false})

    const bookmarkArticle = async () => {
        if(!uid){
            setMessage({
                text: `Bookmarks are limited to registered users. Please sign in or create an account.`,
                success: false
            })
        } else {
            try {
            await updateDoc(doc(db, 'users', uid), {
                bookmarks: arrayUnion({articleId: data.id})
            });
            setMessage({
                text: `Article Bookmarked`,
                success: true
            })
            // dispatch(updateNotification({header:name, text: "Added To Wishlist", imageUrl}))
            // setTimeout(() => {
            //     dispatch(closeNotification())
            // }, 2000);
            } catch (e) {
                console.error("Error adding document: ", e);
                setMessage({
                    text: `Error Occured`,
                    success: false
                })
            }
        }
    }

  return (
    <div className="flex justify-end">
        <button onClick={bookmarkArticle} className="capitalize p-1 px-2 rounded-sm text-primary transition font-semibold bg-secondary border border-primary font-primary w-max hover:bg-primary hover:text-secondary">Bookmark this article</button>
    </div>
  )
}

export default Bookmark