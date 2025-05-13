import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/solaridx/CTA";
import FooterCTA from "../components/solaridx/FooterCTA";
import Hero from "../components/solaridx/Hero";
import VideoSection from "../components/solaridx/VideoSection";
import Features from "../components/solaridx/Features";

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
