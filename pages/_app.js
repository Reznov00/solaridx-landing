import SolariDXLayout from "./solaridx/Layout";
import ScanARLayout from "./scanar/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Use a different layout for the ScanAR page
  if (router.pathname === "/scanar") {
    return (
      <ScanARLayout>
        <Component {...pageProps} />
      </ScanARLayout>
    );
  }

  // Use the SolariDX layout for all other pages
  return (
    <SolariDXLayout>
      <Component {...pageProps} />
    </SolariDXLayout>
  );
}
