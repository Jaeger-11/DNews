import Layout from "@/components/Layout";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className='text-dark p-2'>
        <h3 className="font-primary text-primary font-semibold text-2xl mb-2">Terms Of Service</h3>
        <p>Welcome to DNews. These Terms of Service govern your use of our website and mobile application. By accessing or using DNews, you agree to comply with and be bound by these Terms. Please read them carefully before using our Service.</p>

        <section className="my-4 flex flex-col gap-4 [&_ul]:list-disc">
          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Acceptance of Terms</h2>
            <p>By accessing or using DNews, you confirm that you have read, understood, and agree to be bound by these Terms, as well as our <Link href={'/privacy-policy'} className="font-semibold text-accent">Privacy Policy</Link>, which is incorporated herein by reference. If you do not agree with these Terms, you should not use our Service.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">User accounts</h2>
            <div className="flex flex-col gap-4">
              <div className="">
                <span className="font-semibold">Account Registration</span>
                <p>To access certain features of the Service, such as commenting on or bookmarking articles, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
              </div>
              <div className="">
                <span className="font-semibold">Account Security</span>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for any activities or actions that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account. DNews will not be liable for any loss or damage arising from your failure to comply with these security obligations.</p>
              </div>
              <div>
                <span className="font-semibold">Account Termination</span>
                <p>We reserve the right to suspend or terminate your account at our discretion, without notice, if we believe that you have violated these Terms or engaged in any unauthorized or harmful behavior.</p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">User Conduct</h2>
            <p>You agree not to use the Service in any manner that:</p>

            <ul className="[&_li]:ml-4 list-disc">
              <li>Violates any applicable law or regulation;</li>
              <li>Is unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable;</li>
              <li>Infringes on any intellectual property or other rights of any party;</li>
              <li>Harasses, stalks, or otherwise harms any person;</li>
            </ul>
            <p>DNews reserves the right to investigate and take appropriate action, including legal action, in response to violations of these Terms.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Content</h2>
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-semibold">User-Generated Content</span>
                <p>By submitting or posting content e.g. comments on DNews, you grant us a non-exclusive, royalty-free, worldwide, and perpetual license to use, display, reproduce, modify, and distribute such content on the Service.
                  <br />
                  You are solely responsible for any content you submit, and you represent and warrant that you have all necessary rights to grant the license above.</p>
              </div>
              <div>
                <span className="font-semibold">Prohibited Content</span>
                <p>You agree not to post content that is offensive, harmful, misleading, or otherwise inappropriate. DNews reserves the right to remove any content at its discretion that violates these Terms or is otherwise objectionable.</p>
              </div>
              <div>
                <span className="font-semibold">Our Content</span>
                <p>All materials on the Service, including text, graphics, logos, images, and software, are owned by or licensed to DNews and are protected by copyright, trademark, and other intellectual property laws. You may not use, copy, modify, or distribute our content without our prior written consent.</p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Third-Party Links</h2>
            <p>The Service may contain links to third-party websites or services. DNews is not responsible for the content, policies, or practices of any third-party websites. Your use of third-party links is at your own risk, and we encourage you to review the terms and privacy policies of any third-party websites you visit.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Disclaimer of Warranties</h2>
            <p>DNews is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or secure, nor do we make any representations regarding the accuracy or reliability of the content available through the Service. <br /> To the fullest extent permitted by law, we disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from the course of performance or usage of trade.
            </p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless DNews, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with: </p>
            <ul className="[&_li]:ml-4">
              <li>Your use of the Service;</li>
              <li>Your violation of these Terms;</li>
              <li>Your violation of any third-party rights, including intellectual property rights.</li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Termination</h2>
            <p>We may suspend or terminate your access to the Service at any time, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful to DNews or other users.</p>
          </article>

          <article>
            <h2 className="text-xl capitalize font-semibold mb-2 text-primary font-primary">Contact us</h2>
            <p>If you have any questions about this Terms of Service, please contact us at:</p>

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