import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "./scanar/CTA";
import Features from "./scanar/Features";
import Hero from "./scanar/Hero";
import Layout from "./scanar/Layout";
import VideoSection from "./scanar/VideoSection";
export default function ScanAR() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>ScanAR - Augmented Reality Solar Analysis | SolariDX</title>
      </Head>
      <Hero />
      <VideoSection />
      <Features />
      <GradientWrapper>
        <CTA />
      </GradientWrapper>
    </>
  );
} 