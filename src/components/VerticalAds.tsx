"use client";
import { ads } from "@/interface"
import { randomAds } from "@/utils"
import Image from "next/image"
import { useState, useEffect } from "react";
import MotionDiv from "./MotionDiv";

const adsVerticalData = [
  {
    imageUrl: 'https://zem.outbrainimg.com/p/srv/sha/60/cc/bb/23d9929aafe35e50e2d06e5f49206fa9c5.jpg?w=300&h=250&fit=crop&crop=optimized&q=45',
    siteUrl: 'https://zem.outbrainimg.com'
  },
  {
    imageUrl: 'https://s0.2mdn.net/simgad/11074622338035941524',
    siteUrl: 'https://s0.2mdn.net'
  },
  {
    imageUrl: 'https://periscopeng.com/wp-content/uploads/2023/09/software-engineer-2048x1214.jpg',
    siteUrl: 'https://periscopeng.com'
  },
  {
    imageUrl: 'https://tpc.googlesyndication.com/daca_images/simgad/10955139048168598845',
    siteUrl: 'https://periscopeng.com'
  },
  {
    imageUrl: 'https://s.adroll.com/a/FHH/DPH/FHHDPHDDAFCGFBFIKTMVP7.png',
    siteUrl: 'https://periscopeng.com'
  }
]

const VerticalAds = () => {
  const [ad, setAd] = useState<ads>(randomAds(adsVerticalData));

  return (
    <MotionDiv
    initial={{x: 50, opacity:0.2}}
    whileInView={{x: 0, opacity:1, transition:{duration:0.6}}}
    viewport={{once:true}}
    >
      <a href={ad.siteUrl}  target="_blank" rel="noopener noreferrer">
      <Image src={ad.imageUrl} className="w-full cursor-pointer my-8" width={500} height={500} alt="ads" />
      </a>
    </MotionDiv>
  )
}

export default VerticalAds