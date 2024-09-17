"use client";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useState } from "react";
import { db } from "@/database/config";
import { addDoc, collection } from "firebase/firestore"; 
import { motion } from "framer-motion";

const InputComment = (data:{id:string}) => {
    const { uid, username } = useAppSelector((state) => state.user);
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
        <motion.form 
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:0.5}}}
        viewport={{once:true}}
        onSubmit={handleSubmit} className="w-full sm:w-2/3 p-2 border rounded-md">
            <input onChange={handleInput} value={opinion} type="text" name="" id="" placeholder="Add your opinion / comment"  className="w-full border-none placeholder:text-base text-primary outline-none bg-transparent"/>
        </motion.form>
        {showNotification && 
        <p className="capitalize text-sm pt-2 text-red-500"> Comments are limited to registered users. Please sign in or create an account to join the discussion. <br /> <Link href={'/authenticate'} className="text-primary font-semibold">Sign in / Create account</Link></p>
        }
    </>
  )
}

export default InputComment;