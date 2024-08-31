import React from 'react'

const Logo = (style: {style:string}) => {
  return (
    <section className={style.style}>
        {/* Logo */}
        <h2 className={`${style.style} font-bold text-2xl text-accent font-primary`}>DNews</h2>
        <p className="text-primary text-xs italic">Stay Informed, Stay Ahead!</p>
    </section>
  )
}

export default Logo