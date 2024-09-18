import Logo from "./Logo"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full bg-dark px-4 py-6 text-secondary">
      <section>
        <article className="mb-4 sm:mb-0">
          <Logo style="text-4xl"/>
          <h3 className="font-primary my-2 underline">Your Gateway to the World’s Stories.</h3>
          <p className="text-sm md:w-3/4">Stay informed with the latest news, trends, and updates from around the globe. Dive into diverse categories, share your voice, and connect with a community of engaged readers. Don’t miss out—bookmark your favorite articles and stay ahead of the news curve with DNews.</p>
        </article>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-10">
          <ul className="text-sm sm:my-4 capitalize">
            <p className="text-base font-semibold text-accent mb-1">About</p>
            <li className="hover:underline w-max"><Link href={'/about'}>Who we are</Link></li>
            <li className="hover:underline w-max"><Link href={'/contact'}>Contact Information</Link></li>
            <li className="hover:underline w-max"><Link href={'/advertise'}>Advertise</Link></li>
          </ul>
          <ul className="text-sm sm:my-4 capitalize">
            <p className="text-base font-semibold text-accent mb-1">Legal</p>
            <li className="hover:underline w-max"><Link href={'/terms-of-service'}>Terms of service</Link></li>
            <li className="hover:underline w-max"><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
          </ul>
          <section className="flex flex-col justify-center">
            <div className="flex gap-1 items-center">
              <a href="https://www.linkedin.com/in/oluwadamilola-falodun-b084221a8/">
                <svg className="size-10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#F2F4F7" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>            
              </a>
              <a href="https://www.facebook.com/falodun.damilolapaul?mibextid=ZbWKwL">
                <svg className="size-8" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#F2F4F7"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg> 
              </a>
              <a href="https://x.com/damzypaulzs">
              <svg className="size-8" fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path> </g></svg>
              </a>
            </div>
            <div>
              <p className="text-sm underline">Developed by <a href="https://github.com/Jaeger-11" className="text-accent font-semibold">Falodun Oluwadamilola</a></p>
            </div>
          </section>
          
        </div>
      </section>
      <div>
        <p className="text-white text-center text-sm italic mt-4 sm:mt-0"> Copyright @2024 DNews. All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer