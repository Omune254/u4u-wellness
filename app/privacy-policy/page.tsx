// app/privacy-policy/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Privacy Policy</h1>
      <p className="text-gray-700 leading-relaxed mb-6">
        Your information is 100% confidential. We never share it with third parties.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Messages sent via the contact form are encrypted and deleted after 30 days.
      </p>
    </div>
  );
}