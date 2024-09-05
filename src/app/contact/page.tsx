import React from 'react'
import Layout from '@/components/Layout'
import HorizontalAds from '@/components/HorizontalAds'

const page = () => {
  return (
    <Layout>
      <div className='text-dark p-4 md:w-3/4'>
        <h3 className="font-primary text-primary font-semibold text-2xl">Contact Us</h3>
        <p>We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
        <section className='flex flex-col gap-4 mt-4 [&_li]:ml-4 [&_p]:mb-2 [&_p]:font-primary [&_p]:font-bold [&_a]:text-primary [&_a]:underline [&_a]:font-semibold [&_ul]:list-disc'>
          <ul>
            <p>For General Iniquiries:</p>
            <li>Email: <a href="mailto:support@dnews.com">support@dnews.com</a></li>
            <li>Phone: <a href="tel:+2348139017478">+ (234)8139017478</a></li>
          </ul>
          <ul>
            <p>Editorial Team:</p>
            <li>Email: <a href="mailto:editorial@dnews.com">editorial@dnews.com</a> <br /> If you have any tips, story ideas, or would like to contribute to our platform, reach out to our editorial team. </li>
          </ul>
          <ul>
            <p>Advertising and Partnership:</p>
            <li>Email: <a href="mailto:ads@dnews.com">ads@dnews.com</a> <br /> Interested in advertising with us or exploring partnership opportunities? Contact our team to learn more.</li>
          </ul>
          <ul>
            <p>Technical Support:</p>
            <li>Email: <a href="mailto:techsupport@dnews.com">techsupport@dnews.com</a> <br /> Experiencing technical issues with the website or our mobile app? Our support team is ready to assist you.</li>
          </ul>
          <ul>
            <p>Social Media: <span>Stay connected and follow us for the latest news and updates:</span></p>
            <li>Twitter: <a href=''> @dnews </a></li>
            <li>Facebook: <a href="http://"> facebook.com/dnews </a></li>
            <li>Instagram: <a href="http://">@dnews</a></li>
          </ul>
          <ul>
            <p>Headquarters:</p>
            <span className='font-medium'> DNews Media, Inc. <br />
            Constitution Avenue, 23rd Floor, World Trade Center <br />
            Central Business District, Abuja.</span>
          </ul>
          <ul>
            <p>Office Hours:</p>
            <span> 
            Monday - Friday: 9:00 AM - 6:00 PM (Local Time) <br />
            Saturday: 10:00 AM - 2:00 PM (Local Time) <br />
            Closed on Sundays and Public Holidays.
            </span>
          </ul>
          <ul>
            <p>Newsletter:</p>
            <span className='font-medium'> Sign up for our daily newsletter to receive top headlines, trending stories, and exclusive content directly in your inbox!</span>
          </ul>
        </section>
      </div>
      <HorizontalAds/>
    </Layout>
  )
}

export default page