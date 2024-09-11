"use client";
import Logo from './Logo'

const MobileHeader = () => {
  return (
    <div className='md:hidden sticky top-0 left-0 flex justify-between items-center z-50 border border-b p-2 bg-light'>
            <section className='flex items-center gap-2'>
                <div className='flex flex-col justify-between h-5 w-6 menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <svg className="size-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg>
                </div>
            </section>
            <Logo style='text-right'/>
    </div>
  )
}

export default MobileHeader