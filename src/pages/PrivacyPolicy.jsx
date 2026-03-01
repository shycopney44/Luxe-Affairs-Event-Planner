import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 pt-32 pb-12">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Privacy Policy</h1>
      <p className="text-gray-700 text-lg mb-6">
        We respect your privacy. Any information you provide during registration
        will only be used to process your Luxe Masterclass enrollment and provide
        access to course materials. We do not sell or share your personal data
        with third parties.
      </p>
      <p className="text-gray-700 text-lg">
        For more details on how your data is handled, please review Microsoft’s
        official{" "}
        <a
          href="https://privacy.microsoft.com/en-us/privacystatement"
          className="underline text-purple-700"
        >
          Privacy Statement
        </a>.
      </p>
    </div>
  );
}
