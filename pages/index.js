import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <GradientWrapper>
        <CTA />
      </GradientWrapper>
      <Features />
      <FooterCTA />
    </>
  );
}
