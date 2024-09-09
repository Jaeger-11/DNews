"use client";
import { ads } from "@/interface"
import { randomAds } from "@/utils"
import Image from "next/image"
import { useState, useEffect } from "react";

const adsHorizontalData = [
  {
    imageUrl: 'https://zem.outbrainimg.com/p/srv/sha/da/95/34/3348d91a64a0da04a9e0c21953850958aa.png?w=728&h=90&fit=crop&crop=optimized&q=45',
    siteUrl: ''
  },
  {
    imageUrl: 'https://s.adroll.com/a/HTD/MKH/HTDMKHKXSREZHJ6FDE3FWX.png',
    siteUrl: ''
  },
  {
    imageUrl: 'https://tpc.googlesyndication.com/daca_images/simgad/13318792977701840394',
    siteUrl: ''
  },
]

const HorizontalAds = (data:{bg:string}) => {

  const [ad, setAd] = useState<ads>(randomAds(adsHorizontalData));

  // useEffect(() => {
    // setInterval(() => {
    //   setAd(randomAds(adsHorizontalData));
    // }, 20000);
    // clearInterval(rotate);
  // }, [ad])

  return (
    <div className={`p-3 bg-${data.bg} text-white flex justify-center`}>
      <Image src={ad.imageUrl} className="max-h-[20svh] cursor-pointer" width={600} height={500} alt="ads" />
    </div>
  )
}

export default HorizontalAds