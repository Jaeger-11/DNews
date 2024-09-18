import Layout from "@/components/Layout"
import Back from "@/components/Back"

const page = () => {
  return (
    <Layout>
      {/* <Back cancel={false}/> */}
      <div className='text-dark p-2'>
        <h3 className="font-primary text-primary font-semibold text-2xl mb-2">Privacy Policy</h3>
        <p>At DNews, your privacy is a priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application. Please read this policy carefully to understand our practices regarding your personal data.</p>

        <section className="my-4 flex flex-col gap-4 [&_ul]:list-disc">
          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Information we collect</h2>
            <p>We collect various types of information to provide and improve our Service to you:</p>

            <ol className="flex flex-col gap-4">
              <li className="[&_li]:ml-4">
                <span className="font-semibold text-lg">Personal Information</span>
                <p>When you sign up for DNews or interact with our Service, we may collect personal information, such as:</p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Profile picture (optional)</li>
                </ul>
              </li>
              <li className="[&_li]:ml-4">
                <span className="font-semibold text-lg">Non-Personal Information</span>
                <p>We may also collect non-personal information about your device, such as:</p>
                <ul>
                  <li>Browser type and version</li>
                  <li>IP address</li>
                  <li>Operating system</li>
                  <li>Log data (such as access dates, times, and referring URLs)</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-lg">Usage Data</span>
                <p>We collect data about how you interact with the Service, including the articles you view, bookmark, or comment on. This helps us improve your experience by personalizing the content we provide.</p>
              </li>
            </ol>
          </article>

          <article className="[&_ul]:list-disc">
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">How we use your information</h2>
            <p>We may use your information for the following purposes:</p>
            <ul className="[&_li]:ml-4 [&_span]:font-semibold">
              <li>
                <span>To provide the Service: </span>
                Enabling you to browse news articles, comment, and bookmark content.
              </li>
              <li>
                <span>To improve user experience: </span>
                Personalizing content, showing trending topics, and providing recommendations.
              </li>
              <li>
                <span>To communicate with you: </span>
                Sending notifications, updates, or responding to inquiries.
              </li>
              <li>
                <span>For security and protection: </span>
                Monitoring for fraudulent activities, securing your account, and maintaining the integrity of our Service.
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Data security</h2>
            <p>We take data security seriously. We implement industry-standard security measures to protect your personal information. However, no method of data transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>
          </article>

          <article className="[&_ul]:list-disc">
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Your Rights and Choices</h2>
            <p>You have the following rights concerning your personal information:</p>
            <ul className="[&_li]:ml-4 [&_span]:font-semibold">
              <li>
                <span>Delete your account: </span>
                You may request to delete your account and associated data.
              </li>
              <li>
                <span>Opt-out of communications: </span>
                You can opt out of receiving marketing emails from us by following the unsubscribe instructions in the emails.
              </li>
            </ul>
            <p>For any such requests, please contact us at <a href="mailto:techsupport@dnews.com" className="font-semibold text-accent">techsupport@dnews.com</a>.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Third-Party Links</h2>
            <p>Our Service may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or policies of these external sites. We encourage you to review the privacy policy of every site you visit.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time to reflect changes in our practices. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the effective date. We encourage you to review this Privacy Policy periodically.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Contact us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>

            <ul className="[&_li]:ml-4 [&_span]:font-semibold">
              <p>Technical Support:</p>
              <li><span>Email: </span><a href="mailto:techsupport@dnews.com" className="text-accent font-semibold">techsupport@dnews.com</a> <br /> Experiencing technical issues with the website or our mobile app? Our support team is ready to assist you.</li>
              <li><span>Address: </span> DNews Media, Inc. <br />
              Constitution Avenue, 23rd Floor, World Trade Center <br />
              Central Business District, Abuja.</li>
            </ul>
          </article>
        </section>
      </div>  
    </Layout>
  )
}

export default page