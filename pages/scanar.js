import Head from "next/head";
import Navbar from "../components/scanar/Navbar";
import Hero from "../components/scanar/Hero";
import Features from "../components/scanar/Features";
import NotifyForm from "../components/scanar/NotifyForm";
import Footer from "../components/scanar/Footer";

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