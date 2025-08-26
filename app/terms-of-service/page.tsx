import Navigation from '../../components/navigation'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 text-black">
              Terms of Service
            </h1>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Home Button */}
          <div className="text-center mb-12">
            <a
              href="/"
              className="btn-primary inline-flex items-center"
              aria-label="Return to home page"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Back to Home
            </a>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <section>
                <h2 className="heading-md text-black mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">2. Use License</h2>
                <p className="text-gray-600 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Amber-Field's 
                  website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-4 space-y-2">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose;</li>
                  <li>attempt to decompile or reverse engineer any software contained on the site;</li>
                  <li>remove copyright or proprietary notations.</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">3. Disclaimer of Warranties</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials on Amber-Field's website are provided on an 'as is' basis. Amber-Field makes no warranties, expressed 
                  or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties 
                  or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>BlockFit Disclaimer:</strong> The BlockFit tool is provided for visualisation purposes only. It does not constitute 
                  construction, architectural, engineering, legal, or council compliance advice. Users are responsible for verifying all 
                  measurements, regulations, and requirements with qualified professionals before making building or purchasing decisions.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">4. Limitations</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Amber-Field or its suppliers be liable for any damages (including, without limitation, damages 
                  for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
                  on Amber-Field's website, even if Amber-Field or an authorized representative has been notified orally 
                  or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-600 leading-relaxed">
                  The materials appearing on Amber-Field's website could include technical, typographical, or photographic errors. 
                  Amber-Field does not warrant that any of the materials on its website are accurate, complete, or current. 
                  Amber-Field may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">6. Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Amber-Field has not reviewed all of the sites linked to its website and is not responsible for the contents of 
                  any such linked site. The inclusion of any link does not imply endorsement by Amber-Field of the site. 
                  Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">7. Modifications</h2>
                <p className="text-gray-600 leading-relaxed">
                  Amber-Field may revise these terms of service for its website at any time without notice. By using this website 
                  you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">8. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit 
                  to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">9. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Email:</strong> hello@amber-field.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
