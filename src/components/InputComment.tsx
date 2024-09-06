"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useState } from "react";
import { db } from "@/database/config";
import { addDoc, collection } from "firebase/firestore"; 

const InputComment = (data:{id:string}) => {
    const dispatch = useAppDispatch();
    const { uid, username, email } = useAppSelector((state) => state.user);
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [opinion, setOpinion] = useState('')

    const handleInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        setOpinion(target.value);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(uid.length > 0){
            try {
                const docRef = await addDoc(collection(db, 'comments'), {
                    articleId : data.id,
                    body: opinion,
                    username: username,
                    userId: uid,
                    created: new Date()
                })
                docRef.id ? console.log(docRef.id) : undefined
                setOpinion('')
            } catch (error) {
                console.log(error);
            }
        } else {
            setShowNotification(true)
            setTimeout(() => {
                setShowNotification(false)
            }, 5000);
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="w-2/3 p-2 border rounded-md">
            <input onChange={handleInput} value={opinion} type="text" name="" id="" placeholder="Add your opinion / comment"  className="w-full border-none placeholder:text-base text-primary outline-none bg-transparent"/>
        </form>
        {showNotification && 
        <p className="capitalize text-sm pt-2 text-red-500"> Comments are limited to registered users. Please sign in or create an account to join the discussion. <br /> <Link href={'/authenticate'} className="text-primary font-semibold">Sign in / Create account</Link></p>
        }
    </>
  )
}

export default InputComment;