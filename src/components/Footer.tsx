import Logo from "./Logo"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full bg-dark px-4 py-6 text-secondary">
      <section>
        <article className="">
          <Logo style="text-4xl"/>
          <h3 className="font-primary my-2 underline">Your Gateway to the World’s Stories.</h3>
          <p className="text-sm md:w-3/4">Stay informed with the latest news, trends, and updates from around the globe. Dive into diverse categories, share your voice, and connect with a community of engaged readers. Don’t miss out—bookmark your favorite articles and stay ahead of the news curve with DNews.</p>
        </article>

        <div>
          <ul className="text-sm my-4">
            <li><Link href={'/'}>About</Link></li>
            <li><Link href={'/'}>Contact Information</Link></li>
            <li><Link href={'/'}></Link></li>
          </ul>
        </div>
      </section>
      <div>
        <p className="text-white text-center text-sm italic"> Copyright @2024 DNews. All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer