import type { Metadata } from 'next'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Prosperty Real Estate',
  description: 'Terms and conditions for using Prosperty Real Estate services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.propertyrealestate.com/terms-and-conditions/',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream">
      {/* Hero */}
      <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="prose prose-lg max-w-none">
          <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-yellow-800">
            <strong>DRAFT:</strong> These Terms and Conditions are a draft and must be reviewed by legal counsel before publication.
          </p>

          <h2>Terms and Conditions</h2>
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your use of the Prosperty Real Estate website and services.
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h3>1. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Prosperty Real Estate's website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>

          <h3>2. Disclaimer</h3>
          <p>
            The materials on Prosperty Real Estate's website are provided on an 'as is' basis. Prosperty Real Estate makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3>3. Limitations</h3>
          <p>
            In no event shall Prosperty Real Estate or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Prosperty Real Estate's website, even if Prosperty Real Estate or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h3>4. Accuracy of Materials</h3>
          <p>
            The materials appearing on Prosperty Real Estate's website could include technical, typographical, or photographic errors. Prosperty Real Estate does not warrant that any of the materials on its website are accurate, complete, or current. Prosperty Real Estate may make changes to the materials contained on its website at any time without notice.
          </p>

          <h3>5. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h3>6. Contact Information</h3>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <ul>
            <li>Email: crm@prospertyrealestate.com</li>
            <li>Phone: +91 9500013446</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
