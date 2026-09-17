import type { Metadata } from 'next'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy | Prosperty Real Estate',
  description: 'Privacy policy for Prosperty Real Estate. How we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.propertyrealestate.com/privacy-policy/',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream">
      {/* Hero */}
      <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="prose prose-lg max-w-none">
          <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-yellow-800">
            <strong>DRAFT:</strong> This Privacy Policy is a draft and must be reviewed by legal counsel before publication.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Prosperty Real Estate (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
          </p>

          <h3>1. Information Collection and Use</h3>
          <p>
            We collect several different types of information for various purposes to provide and improve our website to you.
          </p>

          <h4>Types of Data Collected:</h4>
          <ul>
            <li><strong>Personal Data:</strong> Email address, first name and last name, phone number, address, city, state, postal code, cookies and usage data.</li>
            <li><strong>Usage Data:</strong> Information about how the website is accessed and used (&quot;Usage Data&quot;). This may include information such as your computer's IP address, browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.</li>
          </ul>

          <h3>2. Use of Data</h3>
          <p>
            Prosperty Real Estate uses the collected data for various purposes:
          </p>
          <ul>
            <li>To provide and maintain our website</li>
            <li>To notify you about changes to our website</li>
            <li>To allow you to participate in interactive features of our website when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our website</li>
            <li>To monitor the usage of our website</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h3>3. Security of Data</h3>
          <p>
            The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: crm@prospertyrealestate.com</li>
            <li>Phone: +91 9500013446</li>
            <li>Address: AP 676, H Block, 15th Street, Annanagar, Chennai, Tamil Nadu, India</li>
          </ul>

          <h3>5. Changes to this Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;effective date&quot; at the top of this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
