import Link from "next/link";

const Footer = () => (
  <footer className="">
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left space-y-4 sm:space-y-0">
        <p className="text-gray-600">© 2025 SolariDX. All rights reserved.</p>

        <div className="flex justify-center sm:justify-start items-center gap-2">
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-500">
            Privacy Policy
          </Link>
          <div className="border-r border-gray-400 h-5 -mb-1" />
          <Link href="/terms-and-conditions" className="text-blue-400 hover:text-blue-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
