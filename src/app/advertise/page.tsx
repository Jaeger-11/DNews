import Layout from "@/components/Layout"

const page = () => {
  return (
    <Layout>
      <div className='text-dark p-2'>
        <h3 className="font-primary text-primary font-semibold text-2xl mb-2">Advertise With DNews</h3>
        <p>Looking to reach a dynamic, engaged audience? DNews is the perfect platform for your brand to connect with a diverse and informed readership. With our fast-growing community and dedicated user base, advertising on DNews offers you a powerful way to promote your brand, product, or service to those who care about what&apos;s happening in the world.</p>

        <section className="my-4 flex flex-col gap-4 [&_ul]:list-disc">
          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Why Advertise with Us?</h2>
            <div className="flex flex-col gap-4">
              <div className="">
                <span className="font-semibold">Highly Engaged Audience</span> <br />
                <p>DNews attracts users who are actively engaging with news content, sharing opinions, and discussing current events. Our audience is diverse, well-informed, and highly responsive, making it an excellent target for your advertising campaigns.</p>
              </div>
              <div className="">
                <span className="font-semibold">Tailored Advertising Solutions</span> <br />
                <p>We understand that every brand is unique. That&apos;s why we offer tailored advertising packages that fit your specific needs and goals. Whether it&apos;s display ads, sponsored content, or native advertising, we work with you to create the most effective campaign to capture attention.</p>
              </div>
              <div>
                <span className="font-semibold">Modern and Mobile-Friendly Platform</span> <br />
                <p>With our lightweight, fast, and user-friendly interface, DNews ensures that your advertisements are displayed seamlessly across all devices, including mobile, tablet, and desktop. Reach users wherever they are, whenever they&apos;re tuned into the news.</p>
              </div>
              <div>
                <span className="font-semibold">Trusted News Source</span><br />
                <p>DNews is built on the principles of reliability, accuracy, and timely news delivery. Our users trust us to provide the information that matters, making our platform the perfect place to advertise products and services they&apos;ll appreciate.</p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Advertising Options</h2>
            <p>We offer a variety of advertising formats to maximize your brand&apos;s visibility:</p>
            <ul className="[&_li]:ml-4 list-disc">
              <li><span className="font-semibold">Display Ads:</span>Engage our readers with high-impact banner ads placed strategically across our website and app.</li>
              <li><span className="font-semibold">Sponsored Content:</span>Align your brand with relevant, engaging content that resonates with our users.</li>
              <li><span className="font-semibold">Video Ads:</span>Capture attention with short, captivating video ads that play before news videos or within articles.</li>
              <li><span className="font-semibold">Newsletter Sponsorship:</span>Get your brand directly into the inboxes of our most dedicated readers by sponsoring our newsletter.</li>
              <li><span className="font-semibold">Custom Campaigns:</span>Work with our team to design a unique advertising campaign that fits your brand&apos;s needs and target audience.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Analytics and Performance</h2>
            <p>We provide detailed reporting and analytics to ensure you get the most out of your advertising campaigns. Track your ad&apos;s performance in real-time, analyze engagement metrics, and gain insights that help you refine your strategy for maximum impact.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Partner with DNews</h2>
            <p>At DNews, we&apos;re not just about delivering news—we&apos;re about building partnerships that drive results. Whether you&apos;re a small business, a startup, or an established brand, we&apos;re here to help you connect with the right audience at the right time.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Get Started Today</h2>
            <p>Ready to take your brand to the next level with DNews? Contact our advertising team to discuss your goals, and we&apos;ll create a custom solution that fits your needs.</p>
          </article>

          <ul className="[&_li]:ml-4 [&_span]:font-semibold">
            <p>Contact Us</p>
            <li><span>Email: </span><a href="mailto:ads@dnews.com" className="text-accent">ads@dnews.com</a> </li>        
            <li><span>Phone: </span><a href="tel:+2348139017478" className="font-semibold">+ (234)8139017478</a></li>
            <p>We look forward to helping your brand make an impact!</p>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default page