import Head from "next/head";
import Navbar from "./scanar/Navbar";
import Hero from "./scanar/Hero";
import Features from "./scanar/Features";
import NotifyForm from "./scanar/NotifyForm";
import Footer from "./scanar/Footer";

export default function ScanAR() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>ScanAR - Coming Soon | SolariDX</title>
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <NotifyForm />
      <Footer />
    </>
  );
} 