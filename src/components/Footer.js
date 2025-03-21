import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">SalesCue</h3>
            <p className="text-gray-400 mt-2">
              AI-driven insights for high-performance sales teams.
            </p>
            {/* Social Media Links */}
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <HiOutlineMail className="h-5 w-5 text-gray-400" />
                support@salescue.com
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="h-5 w-5 text-gray-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker className="h-5 w-5 text-gray-400" />
                123 Sales St, New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 text-center text-gray-400">
          <Link to="/privacy-policy" className="hover:underline mx-2">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/terms" className="hover:underline mx-2">
            Terms of Service
          </Link>
        </div>

        <div className="mt-4 text-center text-gray-500">
          © {new Date().getFullYear()} SalesCue. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
