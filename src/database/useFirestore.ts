"use client"
import { useState, useEffect } from "react";
import { db } from "./config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

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

export { getComments };