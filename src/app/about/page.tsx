import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <Layout>
      <div className='text-dark p-2'>
        <h3 className="font-primary text-primary font-semibold text-2xl mb-2">Who We Are</h3>
        <p>Welcome to DNews, your go-to destination for staying informed with the latest news, trends, and stories from around the world. We&apos;re a team of passionate young professionals who are driven to make news accessible, reliable, and engaging.</p>

        <section className="my-4 flex flex-col gap-4 [&_ul]:list-disc [&_li]:ml-4 [&_span]:font-semibold">
          <section className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center border-y py-4'>
            <div>
              <Image   
              src={'/team.jpg'}
              width={400}
              height={200}
              alt='team'
              className='aspect-video w-full object-cover object-center'
              />
            </div>
            <article>
              <h2 className="text-xl capitalize font-semibold mb-1 text-primary font-primary">Our Story</h2>
              <p>Founded by <i className='font-semibold text-primary'>Victor, Chisom, Dami, and Nafisa</i> <b className='text-primary'>(VCDN)</b>, DNews was created to bridge the gap between news content and the fast-paced lives of today&apos;s generation. We realized that while the news landscape is vast, it often lacks personalization and user interaction. So, we set out to build a platform that not only delivers breaking news but also fosters a community of readers who can engage, comment, and share their thoughts in real-time.</p>
            </article>
          </section>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Our Mission</h2>
            <p>At DNews, our mission is simple: <br />
            <span>To keep you informed and connected to the world.</span> <br />
            We believe that news should be accessible to everyone, presented in a modern, fast, and user-friendly way. Whether you want to catch up on global events, bookmark your favorite articles, or share your opinions with others, DNews is here to make that experience seamless.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">What Sets Us Apart</h2>
            <ul>
              <li><span>Engaging and Interactive: </span>We don&apos;t just provide news; we encourage our users to participate in discussions, share their viewpoints, and engage with the content that matters most to them.</li>
              <li><span>Personalized Experience: </span>From top trends to curated categories, DNews tailors news based on your preferences. Our platform gives you the power to explore news by your interests and bookmark articles for later.</li>
              <li><span>Community-Driven:</span>We believe that news is more than just headlines. Our community shares opinions, debates key issues, and contributes to shaping the news narrative.</li>
              <li><span>Fast and Lightweight:</span>Built with cutting-edge technology, DNews is designed to provide a fast, reliable, and mobile-friendly news experience.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Meet the Team</h2>
            <p>Behind DNews is a dynamic team of youth-driven innovators who bring passion and expertise to the table:</p>
            <ul>
              <li><span>Victor: </span>A tech enthusiast with a keen eye for innovation and problem-solving. He ensures DNews delivers the latest features that make our platform user-friendly.</li>
              <li><span>Chisom:</span> A master of design and user experience. Chisom brings news to life visually and makes sure the platform looks as good as it works.</li>
              <li><span>Dami: </span> A strategist who always has an ear to the ground on trending topics. Dami leads the content strategy to ensure you&apos;re always in the loop.</li>
              <li><span>Nafisa:</span> Our community builder and outreach expert. Nafisa connects us to our audience, ensuring that DNews remains interactive and inclusive.</li>
            </ul>
          </article>
            
          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Join Us on Our Journey</h2>
            <p>DNews is not just a news app; it&apos;s a growing community. Join us in our mission to stay informed, express opinions, and make a positive impact on the way news is consumed. Whether you&apos;re here for the latest breaking news, to engage in conversations, or simply to stay updated, DNews is the platform for you.</p>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export default page