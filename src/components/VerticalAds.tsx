"use client";
import { ads } from "@/interface"
import { randomAds } from "@/utils"
import Image from "next/image"
import { useState, useEffect } from "react";

const adsVerticalData = [
  {
    imageUrl: 'https://zem.outbrainimg.com/p/srv/sha/60/cc/bb/23d9929aafe35e50e2d06e5f49206fa9c5.jpg?w=300&h=250&fit=crop&crop=optimized&q=45',
    siteUrl: ''
  },
  {
    imageUrl: 'https://s0.2mdn.net/simgad/11074622338035941524',
    siteUrl: ''
  },
  {
    imageUrl: 'https://periscopeng.com/wp-content/uploads/2023/09/software-engineer-2048x1214.jpg',
    siteUrl: ''
  },
  {
    imageUrl: 'https://tpc.googlesyndication.com/daca_images/simgad/10955139048168598845',
    siteUrl: ''
  },
]

const VerticalAds = () => {
  const [ad, setAd] = useState<ads>(randomAds(adsVerticalData));

  // useEffect(() => {
    // setInterval(() => {
    //   setAd(randomAds(adsVerticalData));
    // }, 20000);
  // }, [ad])


  return (
    <div>
      <Image src={ad.imageUrl} className="w-full cursor-pointer my-8" width={500} height={500} alt="ads" />
    </div>
  )
}

export default VerticalAds