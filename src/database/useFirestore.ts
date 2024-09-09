"use client"
import { useState, useEffect } from "react";
import { db } from "./config";
import { collection, onSnapshot, query, where, doc } from "firebase/firestore";
import { useAppSelector } from "@/lib/hooks";

const getComments = (data:{id:string}) => {
    const [comments, setComments]:any = useState([]);
    const collectionRef = collection(db, 'comments');
    const order = query(collectionRef, where("articleId", "==", `${data.id}`));
    const getData = async () => {
        onSnapshot(order, (querySnapshot) => {
            let documents:object[] = []
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id:doc.id});
            });
            setComments(documents)
          });
    }

    useEffect(() => {
        getData();
    }, [])
    return {comments};
}

const getBookmarks = () => {
    const { uid } = useAppSelector((state) => state.user);
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
    }, [uid])

    return {bookmarks};
}

export { getComments, getBookmarks };