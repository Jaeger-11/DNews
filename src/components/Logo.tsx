import Link from "next/link"

const Logo = (style: {style:string}) => {
  return (
    <Link href='/' className={style.style}>
        {/* Logo */}
        <h2 className={`${style.style} font-bold text-2xl text-accent font-primary`}>DNews</h2>
        <p className="text-primary text-xs italic">Stay Informed, Stay Ahead!</p>
    </Link>
  )
}

export default Logo