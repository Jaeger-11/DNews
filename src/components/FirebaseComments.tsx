"use client"
import { initials } from "@/utils";
import { useState, useEffect } from "react";
import { db } from "@/database/config";
import { collection, onSnapshot, query, where} from "firebase/firestore";

const FirebaseComments = (data:{id:string}) => {
    const [comments, setComments]:any = useState([]);
    const collectionRef = collection(db, 'comments');
    const order = query(collectionRef, where("articleId", "==", `${data.id}`));
    onSnapshot(order, (querySnapshot) => {
        let documents:object[] = []
        querySnapshot.forEach((doc) => {
            documents.push({...doc.data(), id:doc.id});
        });
        setComments(documents)
    });

  return (
    comments.map((item:{username:string, body:string, id:number}) => {
        return (
            <article key={item.id} className="p-2 pb-4 flex gap-2 border-b">
                <div className="text-primary bg-secondary uppercase rounded-full size-10 flex items-center justify-center font-semibold">{initials(item.username)}</div>
                <div className="flex-1">
                    <h3 className="mt-2 font-semibold capitalize text-gray-500">{item.username}</h3>
                    <p className="mt-1">{item.body}</p>
                </div>
            </article>
        )
    })
  )
}

export default FirebaseComments