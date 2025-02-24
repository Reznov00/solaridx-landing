export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your personal information.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We collect personal information such as your name, email address, and
          any other details you provide when using our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use your information to provide, maintain, and improve our
          services, as well as to communicate with you about updates and offers.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Data Protection
        </h2>
        <p className="text-gray-600 mb-4">
          We take appropriate security measures to protect your personal
          information from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this privacy policy, please contact us
          at <span className="font-medium">support@example.com</span>.
        </p>
      </div>
    </div>
  );
}
