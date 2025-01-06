import React from "react";

function Footer() {
  return (
    <footer className="bg-fuchsia-200 text-gray-800 py-6">
      <div className="container mx-auto text-center">
        {/* Footer Navigation */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-fuchsia-700">
            About Us
          </a>
          <a href="#" className="hover:text-fuchsia-700">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-fuchsia-700">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-fuchsia-700">
            Contact Us
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-fuchsia-700">
            <span role="img" aria-label="Facebook"></span> Facebook
          </a>
          <a href="#" className="hover:text-fuchsia-700">
            <span role="img" aria-label="Twitter"></span> Twitter
          </a>
          <a href="#" className="hover:text-fuchsia-700">
            <span role="img" aria-label="Instagram"></span> Instagram
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
