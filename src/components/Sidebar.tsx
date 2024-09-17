"use client"
import Link from "next/link";
import Logo from "./Logo";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/database/config";
import { setUser, logOut } from "@/lib/features/userSlice";
import { setCategory, setSearch } from "@/lib/features/contentSlice";
import { newsCategories } from "@/data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LogOut from "./LogOut";

const Sidebar:React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { username, uid } = useAppSelector((state) => state.user );
    const { param, category } = useAppSelector((state) => state.content)
    const [ selectedCategory, setSelectedCategory ] = useState<string>(category || 'Latest News');

    let it:string = ''
    onAuthStateChanged(auth, (user) => {
        if(user){
            let userInfo = {email: user.email, username: user.displayName, uid: user.uid}
            dispatch(setUser(userInfo))
        } else {
            dispatch(logOut())
        }
    })

    const selectCategory = (cat:string) => {
        router.push('/#searchResults')
        setSelectedCategory(cat);
        dispatch(setCategory({category:cat}));
    }

    const handleSearch = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        router.push('/#searchResults')
        it = target.value
        dispatch(setSearch({text:it}));
    }

  return (
    <aside className="h-svh hidden min-h-max p-4 md:flex flex-col w-max justify-between border-r">
        <Logo style=""/>
        {
            uid ? 
            <Link href={'/profile'} className="flex gap-1 items-center w-max cursor-pointer hover:text-primary hover:underline">
                <svg className="size-4" fill="#1D3557" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#1D3557"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,1a11,11,0,0,0,0,22,1,1,0,0,0,0-2,9,9,0,1,1,9-9v2.857a1.857,1.857,0,0,1-3.714,0V7.714a1,1,0,1,0-2,0v.179A5.234,5.234,0,0,0,12,6.714a5.286,5.286,0,1,0,3.465,9.245A3.847,3.847,0,0,0,23,14.857V12A11.013,11.013,0,0,0,12,1Zm0,14.286A3.286,3.286,0,1,1,15.286,12,3.29,3.29,0,0,1,12,15.286Z"></path></g></svg>
                <p className="text-sm font-bold capitalize">{username}</p>
            </Link>
            :
            <Link href='/authenticate' className="text-sm font-primary underline cursor-pointer hover:text-accent transition-colors">Login / Signup</Link>
        }

        <section>
            {/* Search  */}
            <div className="border-b mb-4 border-primary pb-1 bg-transparent flex gap-2 items-center w-max">
                <svg className="size-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#A9A9A9" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg>
                <input onChange={handleSearch} className="bg-transparent outline-none border-none placeholder-shown:text-sm placeholder-shown:text-gray text-sm place" placeholder="Search" type="text" name="search" id="search" />
            </div>
            {/* Categories */}
            <div >
                <p className="font-semibold text-primary mb-2">Categories</p>
                <ul className="flex flex-col gap-1 text-sm h-[50svh] overflow-y-scroll pb-2 pl-1">
                {
                    newsCategories.map((newsCategory) => {
                        return <li onClick={() => selectCategory(newsCategory)} key={newsCategory} className={` ${category.toLowerCase() === newsCategory.toLowerCase() ? ' text-accent font-semibold' : 'text-primary'} capitalize w-max cursor-pointer hover:text-accent hover:scale-105 hover:font-medium transition-all`}>{newsCategory}</li>
                    })
                }
                </ul>
            </div>
        </section>
        <div>
        {
            uid && 
            <LogOut/>
        }
        </div>
    </aside>
  )
}

export default Sidebar;