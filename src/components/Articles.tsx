"use client";
import { newsArticles } from "@/data"
import { article } from "@/interface";
import HorizontalAds from "./HorizontalAds";
import Header from "./Header";
import Article from "./Article";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { clearSearch, setCategory } from "@/lib/features/contentSlice";

const Articles = () => {
    const dispatch = useAppDispatch();
    const { category, param } = useAppSelector((state) => state.content);
    const [articles, setArticles] = useState<article[]>(newsArticles);
    
    const filterByCategory = () => {
        if(category.toLowerCase() === 'latest news'){
            setArticles(newsArticles)
        } else if(category.toLowerCase() === 'top matches'){
            setArticles(articles)
        } else {
            let data:article[] = newsArticles.filter((item) => item.category.toLowerCase() === category.toLowerCase())
            setArticles(data);
        }
    }

    const searchArticles = () => {
        let data:article[] = newsArticles.filter((item) => item.title.toLowerCase().includes(param.toLowerCase()))
        dispatch(setCategory({category:'Top Matches'}))
        setArticles(data);
        if(param.length === 0){
            refreshArticles()
        }
    }

    const refreshArticles = () => {
        dispatch(setCategory({category:'latest news'}))
        dispatch(clearSearch())
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
        <div className="flex justify-between items-center">
            <Header/>
            { param && <p className="text-sm font-semibold italic hover:underline transition-all text-red-500 cursor-pointer" onClick={refreshArticles}>Cancel Search</p>}
        </div>
        <main className="grid grid-cols-1 pb-10">
            {articles.length > 0 ? 
                articles.map((item:article) => {
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
                })
                :
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