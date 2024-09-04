"use client";
import { newsArticles } from "@/data"
import { apiArticle, article } from "@/interface";
import { fetchArticles } from "@/utils";
import HorizontalAds from "./HorizontalAds";
import Header from "./Header";
import Article from "./Article";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { setCategory } from "@/lib/features/contentSlice";

const Articles = () => {
    const dispatch = useAppDispatch();
    const { category, param } = useAppSelector((state) => state.content);
    const [articles, setArticles] = useState<article[]>(newsArticles);
    // const data = await fetchArticles();
    // console.log(data)
    // let data:article[] = newsArticles;
    const filterByCategory = () => {
        if(category.toLowerCase() === 'latest news'){
            setArticles(newsArticles)
        } else {
            let data:article[] = []
            newsArticles.map((item) => {
                if(item.category.toLowerCase() === category.toLowerCase()){
                    data.push(item)
                }
            })
            setArticles(data);
        }
    }

    const searchArticles = () => {
        let data:article[] = []
        newsArticles.map((item) => {
            if(item.title.toLowerCase().includes(param)){
                data.push(item);
            }
        })
        setArticles(data);
        if(param.length > 0){
            dispatch(setCategory({category:'Top Matches'}))
        }
    }

    useEffect(() => {
        searchArticles();
    }, [param])

    useEffect(() => {
        filterByCategory();
    },[category])

  return (
    <section className="">
        <Header/>
        <main className="grid grid-cols-1 pb-10">
            {articles.length > 0 ? articles.map((item:article) => {
                // const { title, id, body } = item
                return (
                    <Article {...item} key={item.id}/>
                )
            }) : 
            <h3 className="font-semibold p-2 mt-4">
                No News in this category yet! <span className="text-accent underline italic"> View Latest News </span>
            </h3>
            }
        </main>
        <HorizontalAds/>
    </section>
  )
}

export default Articles

// https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D