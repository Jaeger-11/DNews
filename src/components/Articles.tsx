"use client";
import { newsArticles } from "@/data"
import { article } from "@/interface";
import HorizontalAds from "./HorizontalAds";
import Header from "./Header";
import Article from "./Article";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { setCategory } from "@/lib/features/contentSlice";
import { motion } from "framer-motion";

const Articles = () => {
    const dispatch = useAppDispatch();
    const { category, param } = useAppSelector((state) => state.content);
    const [articles, setArticles] = useState<article[]>(newsArticles);
    
    const filterByCategory = () => {
        if(category.toLowerCase() === 'latest news'){
            setArticles(newsArticles)
        } else {
            let data:article[] = newsArticles.filter((item) => item.category.toLowerCase() === category.toLowerCase())
            setArticles(data);
        }
    }

    const searchArticles = () => {
        let data:article[] = newsArticles.filter((item) => item.title.toLowerCase().includes(param.toLowerCase()))
        if(param.length > 0){
            setArticles(data);
            dispatch(setCategory({category:'Top Matches'}))
        }
    }

    const refreshArticles = () => {
        dispatch(setCategory({category:'latest news'}))
        setArticles(newsArticles);
    }

    useEffect(() => {
        searchArticles();
    }, [param])

    useEffect(() => {
        filterByCategory();
    },[category])

    let it:number = 0

  return (
    <section  id="searchResults">
        <Header/>
        <main className="grid grid-cols-1 pb-10">
            {articles.length > 0 ? articles.map((item:article) => {
                it++
                return (
                    <div key={item.id}>
                    {(it % 20 === 0) ?
                        <>
                            <HorizontalAds bg="transparent"/>
                            <Article {...item} key={item.id}/>
                        </> : 
                        <Article {...item} key={item.id}/>
                    }
                    </div>
                )
            }) : 
            <h3 className="font-semibold p-2 mt-4">
                No Matches! <span className="text-accent cursor-pointer underline italic" onClick={refreshArticles}> View Latest News </span>
            </h3>
            }
        </main>
        <HorizontalAds bg="transparent"/>
    </section>
  )
}

export default Articles