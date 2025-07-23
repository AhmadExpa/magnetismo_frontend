import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At Magnetismo, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our
        website or interact with our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-2">We may collect the following types of information:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Personal Information:</strong> Name, email address, phone number, billing and shipping addresses, and payment information when placing orders.</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device type, and operating system used to access our site.</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent, referring websites, and other diagnostic data through analytics tools.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect for the following purposes:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>To process orders and deliver products to you.</li>
        <li>To communicate with you regarding your orders or inquiries.</li>
        <li>To improve and optimize our website and services.</li>
        <li>To send promotional content and marketing offers, with your consent.</li>
        <li>To detect and prevent fraudulent transactions and ensure platform security.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. However, we may share your information with third-party
        service providers who assist in operations such as payment processing, order fulfillment, analytics, and
        email communications. These partners are required to maintain the confidentiality and security of your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies & Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us
        remember your preferences, understand site usage, and improve functionality. You can control cookie settings
        through your browser preferences.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your data. All transactions
        are secured with SSL encryption, and access to data is restricted to authorized personnel only.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal information at any time. To exercise these
        rights or inquire about your data, please contact us at <a href="mailto:info@themagnetismo.com" className="text-blue-600 underline">info@themagnetismo.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Data Retention</h2>
      <p className="mb-4">
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy,
        unless a longer retention period is required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Children’s Privacy</h2>
      <p className="mb-4">
        Our services are not intended for children under the age of 16. We do not knowingly collect data from minors.
        If we become aware that we have inadvertently collected personal information from a child, we will take steps to
        delete it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
        All updates will be posted on this page with an updated “Effective Date.” Please check back regularly.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-2">If you have any questions about this Privacy Policy, you can contact us at:</p>
      <ul className="pl-6 mt-2">
        <li><strong>Email:</strong> info@themagnetismo.com</li>
        <li><strong>Address:</strong> 18211 Redriver Sky, San Antonio, Texas 78259</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
