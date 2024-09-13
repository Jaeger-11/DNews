"use client";
import { apiArticle } from "@/interface";
import Header from "./Header";
import HorizontalAds from "./HorizontalAds";
import ApiArticle from "./ApiArticle";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCategory, setSearch } from "@/lib/features/contentSlice";

const ApiArticles = () => {
    const dispatch = useAppDispatch();
    const { param } = useAppSelector((state) => state.content);
    const [articles, setArticles] = useState([]);
    const [searchResponse, setSearchResponse] = useState(articles);

    const searchArticles = () => {
        let response:any = articles.filter((item:apiArticle) => item.title.toLowerCase().includes(param.toLowerCase()));
        dispatch(setCategory({category:'Top Matches'}))
        setSearchResponse(response)
        if(param.length === 0){
            dispatch(setCategory({category:'latest news'}))
        } 
    }

    const refreshArticles = () => {
        setSearchResponse(articles);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(data => 
            setArticles(data.data)
        )
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        searchArticles();
    }, [param])
    let it:number = 0

    return (
    <section className="scroll-padding" id="searchResults">
        <Header/>
        <main className="pb-10">
            <div>
                {searchResponse.length === 0 && param.length > 0 ?
                    <h3 className="font-semibold p-2 mb-4">No Article matches your search! &quot;{param}&quot; <span className="text-accent underline italic cursor-pointer" onClick={refreshArticles}> View Latest News </span></h3>
                :
                searchResponse.map((item:apiArticle) => {
                    it++
                    return (
                        <div key={item.id}>
                        {(it % 20 === 0) ?
                            <>
                                <HorizontalAds bg="transparent"/>
                                <ApiArticle {...item} key={item.id}/>
                            </> : 
                            <ApiArticle {...item} key={item.id}/>
                        }
                        </div>
                    )
                })}
                {
                param.length === 0 && 
                articles.map((item:apiArticle) => {
                    it++
                    return (
                        <div key={item.id}>
                        {(it % 20 === 0) ?
                            <>
                                <HorizontalAds bg="transparent"/>
                                <ApiArticle {...item} key={item.id}/>
                            </> : 
                            <ApiArticle {...item} key={item.id}/>
                        }
                        </div>
                    )
                })}
            </div>
        </main>
        <HorizontalAds bg="primary"/>
    </section>
  )
}

export default ApiArticles;