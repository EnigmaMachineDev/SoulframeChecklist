import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-sf-bg text-sf-text">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-sf-muted hover:text-sf-bright transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Tracker
        </Link>

        <h1 className="text-3xl font-bold text-sf-bright tracking-widest mb-2">Privacy Policy</h1>
        <p className="text-xs text-sf-muted font-sans mb-8">Last updated: February 8, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed font-sans">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Introduction</h2>
            <p>
              This Privacy Policy describes how Soulframe Progress Tracker ("we", "us", or "our") collects,
              uses, and shares information when you use our website (the "Site"). By using the Site, you agree
              to the collection and use of information as described in this policy. We are committed to
              protecting your privacy and being transparent about our data practices.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Information We Collect</h2>

            <h3 className="text-base font-bold text-sf-bright mb-2">Local Storage Data</h3>
            <p className="mb-3">
              This Site uses your browser's localStorage to save your checklist progress. This data is stored
              entirely on your device and is never transmitted to our servers or any third party. You can clear
              this data at any time using your browser settings or the "Reset All Progress" feature within the
              application.
            </p>

            <h3 className="text-base font-bold text-sf-bright mb-2">Automatically Collected Information</h3>
            <p className="mb-3">
              When you visit the Site, certain information may be collected automatically through cookies and
              similar tracking technologies, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs and pages visited</li>
              <li>Time and date of your visit</li>
              <li>Device information (screen size, device type)</li>
              <li>Approximate geographic location (based on IP address)</li>
            </ul>
            <p>
              This information is collected by our advertising and analytics partners to provide and optimize
              ad delivery and to analyze site traffic.
            </p>
          </section>

          {/* Advertising */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Advertising &amp; Third-Party Partners</h2>
            <p className="mb-3">
              We use Ezoic to provide personalized advertising on this Site. Ezoic and its advertising partners
              may use cookies, web beacons, and similar technologies to collect information about your browsing
              activity across websites in order to serve you relevant advertisements.
            </p>
            <p className="mb-3">
              For more information about how Ezoic collects, uses, and shares your data, please review{' '}
              <a
                href="https://g.ezoic.net/privacy/soulframechecklist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sf-bright underline hover:text-sf-green transition-colors"
              >
                Ezoic's Privacy Policy for this site
              </a>{' '}
              and{' '}
              <a
                href="https://www.ezoic.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sf-bright underline hover:text-sf-green transition-colors"
              >
                Ezoic's general Privacy Policy
              </a>
              .
            </p>
            <p>
              You can learn more about Ezoic's advertising partners and their privacy practices by visiting the{' '}
              <a
                href="https://www.ezoic.com/ad-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sf-bright underline hover:text-sf-green transition-colors"
              >
                Ezoic Advertising Partners page
              </a>
              .
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Cookies</h2>
            <p className="mb-3">
              Cookies are small text files placed on your device by websites you visit. They are widely used to
              make websites work more efficiently and to provide information to site owners.
            </p>
            <p className="mb-3">
              This Site uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li><strong className="text-sf-bright">Essential cookies:</strong> Required for the Site to function properly</li>
              <li><strong className="text-sf-bright">Analytics cookies:</strong> Help us understand how visitors interact with the Site</li>
              <li><strong className="text-sf-bright">Advertising cookies:</strong> Used by Ezoic and its partners to deliver relevant advertisements</li>
            </ul>
            <p>
              You can manage your cookie preferences through your browser settings. Please note that disabling
              cookies may affect the functionality of the Site. You may also manage your consent preferences
              through the consent management tool provided on this Site.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Your Rights</h2>

            <h3 className="text-base font-bold text-sf-bright mb-2">General Rights</h3>
            <p className="mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your personal data</li>
              <li>Withdraw consent at any time where processing is based on consent</li>
            </ul>

            <h3 className="text-base font-bold text-sf-bright mb-2">California Residents (CCPA)</h3>
            <p className="mb-3">
              If you are a California resident, under the California Consumer Privacy Act (CCPA) you have
              additional rights, including the right to know what personal information is being collected about
              you, the right to request deletion of your personal information, the right to opt out of the sale
              or sharing of your personal information, and the right to non-discrimination for exercising your
              privacy rights.
            </p>

            <h3 className="text-base font-bold text-sf-bright mb-2">European Residents (GDPR)</h3>
            <p>
              If you are located in the European Economic Area (EEA), you have rights under the General Data
              Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing,
              data portability, and the right to object to processing. If you wish to exercise any of these
              rights, please contact us using the information below.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Data Retention</h2>
            <p>
              Your checklist progress data is stored only in your browser's localStorage and is not retained by
              us. Data collected by advertising and analytics partners is retained according to their respective
              privacy policies. We do not maintain any server-side databases of user information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Children's Privacy</h2>
            <p>
              This Site is not directed to children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us so we can take appropriate action.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Third-Party Links</h2>
            <p>
              This Site may contain links to third-party websites. We are not responsible for the privacy
              practices or content of those sites. We encourage you to read the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with
              an updated "Last updated" date. Your continued use of the Site after any changes constitutes your
              acceptance of the revised policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-sf-bright tracking-wider mb-3">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, or if you wish to exercise any of
              your rights, please contact us at:{' '}
              <a
                href="mailto:enigmamachinedev@gmail.com"
                className="text-sf-bright underline hover:text-sf-green transition-colors"
              >
                enigmamachinedev@gmail.com
              </a>
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-6 border-t border-sf-border flex flex-wrap gap-4 text-xs text-sf-muted font-sans">
          <Link to="/about" className="hover:text-sf-bright transition-colors">About</Link>
          <Link to="/contact" className="hover:text-sf-bright transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-sf-bright transition-colors">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
}
