import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50/40 to-white pt-28 pb-20">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-700 font-medium hover:text-emerald-900 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="h-7 w-7 text-emerald-600" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mt-1">Last updated: December 22, 2025</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to Your Privacy</h2>
            <p>U4U Wellness Center (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["Personal identification information (name, email address, phone number) when you submit our contact form or book a session.", "Usage data such as pages visited and time spent on the site, collected anonymously through analytics tools.", "Any information you voluntarily provide when communicating with us via WhatsApp, email, or phone."].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
            <p>We use the information we collect solely to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["Respond to your enquiries and schedule appointments.", "Provide and improve our mental health services.", "Send you relevant updates about our services (only with your consent).", "Comply with legal and ethical obligations as required by the Kenya Counsellors and Psychologists Board."].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Confidentiality of Therapy Sessions</h2>
            <p>All information shared during therapy sessions is strictly confidential. We adhere to the ethical guidelines set by the Kenya Counsellors and Psychologists Board. Confidentiality may only be broken in exceptional circumstances, such as when there is a risk of serious harm to yourself or others, and we will always discuss this with you openly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our contact forms use secure, encrypted transmission (HTTPS), and data is processed through reputable third-party services that comply with international data protection standards.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
            <p>We use Formspree to process contact form submissions securely. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted service providers who assist us in operating our website and conducting our business.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal information at any time. To exercise these rights, please contact us at <a href="mailto:u4uwellnesscenter@gmail.com" className="text-emerald-700 font-medium hover:text-emerald-900 underline">u4uwellnesscenter@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
            <div className="mt-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-2">
              <p className="text-sm"><span className="font-semibold text-gray-800">Email:</span> <a href="mailto:u4uwellnesscenter@gmail.com" className="text-emerald-700 hover:text-emerald-900">u4uwellnesscenter@gmail.com</a></p>
              <p className="text-sm"><span className="font-semibold text-gray-800">Phone:</span> <a href="tel:+254110707361" className="text-emerald-700 hover:text-emerald-900">0110 707 361</a></p>
              <p className="text-sm"><span className="font-semibold text-gray-800">Location:</span> Nakuru, Kenya</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
