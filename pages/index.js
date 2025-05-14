import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "./solaridx/CTA";
import FooterCTA from "./solaridx/FooterCTA";
import Hero from "./solaridx/Hero";
import VideoSection from "./solaridx/VideoSection";
import Features from "./solaridx/Features";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <VideoSection />
      <GradientWrapper>
        <CTA />
      </GradientWrapper>
      <Features />
      <FooterCTA />
    </>
  );
}
