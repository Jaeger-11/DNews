"use client"
import { useState, useEffect } from 'react';
import { article } from '@/interface';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Link from 'next/link';
import { shuffleArticle } from '@/utils';
import { newsArticles } from '@/data';

const TrendingSlide = () => {
    const [trends, setTrends] = useState<article[]>(newsArticles.slice(0,4))

    useEffect(() => {
        setTrends(shuffleArticle(newsArticles))
    },[])

  return (
    <div className='mb-6 pb-2 border-b w-full' id='slide'>
        <h2 className="font-bold text-xl uppercase mb-2 font-primary text-primary">Trending</h2>
        <Splide 
        options={{
        rewind: true,
        interval: 4000,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        pagination: false,
        speed: 1000,
        rewindSpeed: 1000,
        }}
        >
            {trends.map((article) => {
                return (
                    <SplideSlide 
                    key={article.id}
                    >
                        <Link href={`/article/${article.id}`} className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer md:items-center p-2">
                            <div className=''>
                            <Image 
                            width={100}
                            height={100}
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full aspect-video object-center object-cover rounded-sm"
                            />
                            </div>
                            <section className='flex flex-col gap-2'>
                                <p className='text-primary font-medium bg-secondary p-1 px-2 w-max rounded-sm'>{article.category}</p>
                                <h3 className='text-2xl text-accent font-semibold font-primary'>{article.title}</h3>
                                <p className='text-base'>{article.brief}</p>
                            </section>
                        </Link>
                    </SplideSlide>
                )
            })}
        </Splide>
    </div>
  )
}

export default TrendingSlide