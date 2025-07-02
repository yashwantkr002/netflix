const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-4">
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Investor Relations</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Speed Test</a>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Jobs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Cookie Preferences</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Legal Notices</a>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Account</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Ways to Watch</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Corporate Information</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Only on Netflix</a>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Media Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>
  
          {/* Language Selector */}
          <div className="mt-8">
            <button className="border border-gray-400 px-4 py-2 rounded-md text-sm hover:border-white">
              English
            </button>
          </div>
  
          {/* Footer Text */}
          <p className="mt-6 text-sm">
            © 2024 Netflix, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  