import Head from "next/head";
import Image from "next/image";
import googlePlayLogo from "../public/icons/google-play.svg";
import appStoreLogo from "../public/icons/app-store.svg";

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Download SolariDX App</title>
      </Head>
      <div className="flex items-center justify-center py-20 bg-slate-200">
        <div className="custom-screen flex flex-col lg:flex-col mt-8 items-center text-gray-600 w-full max-w-6xl gap-12">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-gray-800 text-center text-3xl font-semibold sm:text-4xl">
              Experience the Future of Solar Energy
            </h1>
            <p className="mt-3 text-center">
              Download the SolariDX app and harness the power of AI-driven solar energy predictions.
              Stay ahead with real-time insights, advanced simulations, and energy forecasts—right at your fingertips.
            </p>
          </div>
          <div className="flex flex-col space-y-5 w-full max-w-sm">
            <a
              href="https://play.google.com/store/apps/details?id=solaridx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 ring-offset-2 ring-indigo-600 focus:ring py-3 rounded-lg"
            >
              <Image src={googlePlayLogo} alt="Google Play" width={24} height={24} />
              <span>Get it on Google Play</span>
            </a>
            <a
              href="https://apps.apple.com/app/solaridx/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 ring-offset-2 ring-gray-700 focus:ring py-3 rounded-lg"
            >
              <Image src={appStoreLogo} alt="App Store" width={24} height={24} />
              <span>Download on the App Store</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
