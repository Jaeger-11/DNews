"use client";
import { ads } from "@/interface"
import { randomAds } from "@/utils"
import Image from "next/image"
import { useState, useEffect} from "react";
import MotionDiv from "./MotionDiv";

const adsHorizontalData = [
  {
    imageUrl: 'https://zem.outbrainimg.com/p/srv/sha/da/95/34/3348d91a64a0da04a9e0c21953850958aa.png?w=728&h=90&fit=crop&crop=optimized&q=45',
    siteUrl: 'https://zem.outbrainimg.com'
  },
  {
    imageUrl: 'https://s.adroll.com/a/HTD/MKH/HTDMKHKXSREZHJ6FDE3FWX.png',
    siteUrl: 'https://s.adroll.com'
  },
  {
    imageUrl: 'https://tpc.googlesyndication.com/daca_images/simgad/13318792977701840394',
    siteUrl: 'https://periscopeng.com'
  },
]

const HorizontalAds = (data:{bg:string}) => {

  const [ad, setAd] = useState<ads>(randomAds(adsHorizontalData));

  return (
    <MotionDiv 
    initial={{scale: 0.2, opacity:0}}
    whileInView={{scale: 1, opacity:1, transition:{duration:1}}}
    viewport={{once:true}}
    className={`p-2 md:bg-${data.bg} text-white flex justify-center w-full`}>
      <a href={ad.siteUrl}  target="_blank" rel="noopener noreferrer" className="md:max-h-[20svh] w-full">
      <Image src={ad.imageUrl} className="md:max-h-[20svh] w-full md:object-center md:object-contain cursor-pointer" width={300} height={500} alt="ads" />
      </a>
    </MotionDiv>
  )
}

export default HorizontalAds