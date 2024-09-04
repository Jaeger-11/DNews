"use client";
import { newsArticles } from "@/data"
import { apiArticle, article } from "@/interface";
import { fetchArticles } from "@/utils";
import HorizontalAds from "./HorizontalAds";
import Header from "./Header";
import Article from "./Article";
import { useAppSelector } from "@/lib/hooks";

const Articles = () => {
    const { category } = useAppSelector((state) => state.content);
    // const data = await fetchArticles();
    // console.log(data)
    let data:article[] = []
    const filterByCategory = () => {
        if(category.toLowerCase() === 'latest news'){
            data = newsArticles;
        } else {
            newsArticles.map((item) => {
                if(item.category.toLowerCase() === category.toLowerCase()){
                    data.push(item)
                }
            })
        }
    }
    filterByCategory();
  return (
    <section className="">
        <Header/>
        <main className="grid grid-cols-1 pb-10">
            {data.length > 0 ? data.map((item:article) => {
                // const { title, id, body } = item
                return (
                    <Article {...item} />
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