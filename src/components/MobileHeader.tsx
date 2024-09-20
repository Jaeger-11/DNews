"use client";
import { useState } from 'react';
import Logo from './Logo'
import { useRouter } from "next/navigation";
import { setCategory, setSearch } from "@/lib/features/contentSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import Link from 'next/link';
import { newsCategories } from '@/data';
import LogOut from './LogOut';
import { motion } from 'framer-motion';

const MobileHeader = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { username, uid } = useAppSelector((state) => state.user );
  const { category } = useAppSelector((state) => state.content)
  const [ selectedCategory, setSelectedCategory ] = useState<string>(category || 'Latest News');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [it, setIt] = useState<string>('')
  const selectCategory = (cat:string) => {
    router.push('/#searchResults')
    setIsOpen(false)
    setSelectedCategory(cat);
    dispatch(setCategory({category:cat}));
  }

  const handleInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
    setIt(target.value);
  }

  const handleSearch = () => {
    router.push('/#searchResults')
    setIsOpen(false);
    dispatch(setSearch({text:it}));
  }

  return (
    <div className='md:hidden sticky top-0 left-0 z-50 bg-light'>
      <div className='relative'>
        <div className='flex justify-between items-center border border-b p-2'>
          <section className='flex items-center gap-4'>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex flex-col justify-between h-5 w-6 menu ${isOpen && 'active'}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div onClick={() => setIsOpen(true)}>
                <svg className="size-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg>
            </div>
          </section>
          <Logo style='text-right'/>
        </div>

        { isOpen && 
        <motion.nav 
        initial={{opacity:0.8, x:-80}}
        whileInView={{opacity:1, x:0, transition:{duration:0.5}}}
        className={`absolute w-full bg-light top-[100%] left-0 border-b-2 border-b-dark`}>
          {/* search */}
          <section className='p-2 bg-secondary'>
            <div className="border w-full bg-light border-dark rounded-sm flex gap-2 items-center">
                <input onChange={handleInput} value={it} className="bg-transparent px-2 flex-1 outline-none border-none placeholder-shown:text-sm placeholder-shown:text-gray text-sm place" placeholder="Search news, topics and more" type="text" name="search" id="search" />
                <div className='p-2 bg-dark' onClick={handleSearch}>
                  <svg className="size-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#A9A9A9" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg>
                </div>
            </div>
          </section>
          <section className='py-4 h-max'>
            {
              uid ? 
              <Link href={'/profile'} onClick={() => setIsOpen(false)} className="flex px-2 gap-1 items-center w-max cursor-pointer hover:text-primary hover:underline">
                  <svg className="size-4" fill="#1D3557" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#1D3557"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,1a11,11,0,0,0,0,22,1,1,0,0,0,0-2,9,9,0,1,1,9-9v2.857a1.857,1.857,0,0,1-3.714,0V7.714a1,1,0,1,0-2,0v.179A5.234,5.234,0,0,0,12,6.714a5.286,5.286,0,1,0,3.465,9.245A3.847,3.847,0,0,0,23,14.857V12A11.013,11.013,0,0,0,12,1Zm0,14.286A3.286,3.286,0,1,1,15.286,12,3.29,3.29,0,0,1,12,15.286Z"></path></g></svg>
                  <p className="text-sm font-bold capitalize">{username}</p>
              </Link>
              :
              <Link href='/authenticate' onClick={() => setIsOpen(false)} className=" px-2 underline font-primary cursor-pointer hover:text-accent transition-colors">Login / Signup</Link>
            }

            <section>
            <p className='text-base font-semibold text-right px-2 font-primary'>Categories</p>
            <ul className="flex flex-col gap-1 text-sm max-h-[60svh] overflow-y-scroll px-2">
                {
                    newsCategories.map((newsCategory) => {
                        return <li onClick={() => selectCategory(newsCategory)} key={newsCategory} 
                        className={` ${category.toLowerCase() === newsCategory.toLowerCase() ? ' text-accent font-semibold' : 'text-primary'} capitalize font-primary py-2 text-base cursor-pointer font-semibold border-b w-full hover:text-accent transition-all`}>
                          {newsCategory}
                        </li>
                    })
                }
                </ul>
            </section>

            <div className='px-2 my-4'>
              {
                  uid && 
                  <LogOut/>
              }
            </div>
          </section>
        </motion.nav>}
      </div>
    </div>
  )
}

export default MobileHeader