const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 px-8">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        <div>
          <h4 className="text-xl font-bold text-green-600 mb-4">IgbaMi</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Empowering Nigerian businesses to own their digital market.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Product</h5>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Follow Us</h5>
          <ul className="space-y-2 text-sm">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} IgbaMi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
