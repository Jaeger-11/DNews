"use client";
import { apiArticle } from "@/interface";
import Header from "./Header";
import HorizontalAds from "./HorizontalAds";
import ApiArticle from "./ApiArticle";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCategory } from "@/lib/features/contentSlice";

const ApiArticles = () => {
    const dispatch = useAppDispatch();
    const { param } = useAppSelector((state) => state.content);
    const [] = useState()
    const [articles, setArticles] = useState([]);
    const [searchResponse, setSearchResponse] = useState(articles);

    const searchArticles = () => {
        let response:any = [];
        articles.map((item:{title:string, body:string, id:number}) => {
            if(item.title.toLowerCase().includes(param)){
                response.push(item);
            } else {
                
            }
        })
        dispatch(setCategory({category:'Top Matches'}))
        setSearchResponse(response)
        // console.log(param,response)
        if(param.length === 0){
            dispatch(setCategory({category:'latest news'}))
            // setSearchResponse(articles)
        } 
        // else {
        //     setSearchResponse(articles);
        // }
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

    return (
    <section className="">
        <Header/>
        <main className="grid grid-cols-1 pb-10">
            <div>
                {searchResponse.length === 0 && param.length > 0 ?
                    <h3 className="font-semibold p-2 mb-4">No Article matches your search! <span className="text-accent underline italic"> View Latest News </span></h3>
                :
                searchResponse.map((item:apiArticle) => {
                    return (
                        <ApiArticle {...item} key={item.id}/>
                    )
                })}
                {
                param.length === 0 && 
                articles.map((item:apiArticle) => {
                    return (
                        <ApiArticle {...item} key={item.id}/>
                    )
                })}
            </div>
        </main>
        <HorizontalAds/>
    </section>
  )
}

export default ApiArticles;