import Navigation from '../../components/navigation'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 text-black">
              Privacy Policy
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
                <h2 className="heading-md text-black mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We collect information you provide directly to us, such as when you contact us through our website forms, 
                  subscribe to our newsletter, or request information about our services. This may include your name, email address, 
                  phone number, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, 
                  and develop new features. We may also use your information to send you technical notices, updates, 
                  security alerts, and support messages.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this privacy policy. We may share your information with trusted third-party service 
                  providers who assist us in operating our website and providing our services.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">5. Cookies, Tracking, and Advertising</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use cookies and similar tracking technologies to enhance your experience on our website. These may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed mt-4 space-y-2">
                  <li>Essential cookies required for basic functionality.</li>
                  <li>Analytics cookies to understand usage and improve our services.</li>
                  <li>Advertising cookies provided by Google and its partners, which may be used to serve personalised ads based on your visits to this and other websites.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Google uses cookies (such as the DoubleClick DART cookie) to serve ads. Users may opt out of personalised advertising by visiting{' '}
                  <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                    Google Ads Settings
                  </a>
                  . You can also control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also opt out of 
                  receiving marketing communications from us at any time. To exercise these rights, please contact us 
                  using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting 
                  the new privacy policy on this page and updating the "Last updated" date. We encourage you to review 
                  this privacy policy periodically.
                </p>
              </section>

              <section>
                <h2 className="heading-md text-black mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this privacy policy or our data practices, please contact us at:
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
