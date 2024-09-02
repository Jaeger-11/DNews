import Link from "next/link";
import Logo from "./Logo";
const Sidebar:React.FC = () => {

    const newsCategories = [
        "Top Stories",
        "Latest News",
        "World",
        "Politics",
        "Business",
        "Technology",
        "Science",
        "Health",
        "Entertainment",
        "Sports",
        "Lifestyle",
        "Education",
        "Opinion",
        "Local News",
        "Weather",
        "Crime & Justice"
      ];

  return (
    // Work on category scroll overflow
    <aside className="h-svh min-h-max p-4 flex flex-col w-max justify-between border-r">
        <Logo style=""/>
        <Link href='/authenticate' className="text-sm underline cursor-pointer hover:text-accent transition-colors">Login / Signup</Link>
        <section>
            {/* Search  */}
            <div className="border-b mb-4 border-primary pb-1 bg-transparent flex gap-2 items-center w-max">
                <svg className="size-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#A9A9A9" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg>
                <input className="bg-transparent outline-none border-none placeholder-shown:text-sm placeholder-shown:text-gray text-sm place" placeholder="Search" type="text" name="search" id="search" />
            </div>
            {/* Categories */}
            <div >
                <p className="font-semibold text-primary mb-2">Categories</p>
                <ul className="flex flex-col gap-1 text-sm h-[50svh] overflow-y-scroll pb-6 pl-1">
                {
                    newsCategories.map((category) => {
                        return <li key={category} className="capitalize w-max cursor-pointer text-primary hover:text-accent hover:scale-105 hover:font-medium transition-all">{category}</li>
                    })
                }
                </ul>
            </div>
        </section>
        <div>

        </div>
    </aside>
  )
}

export default Sidebar;