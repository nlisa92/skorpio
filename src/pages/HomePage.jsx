import Hero from "../components/home/Hero";
import AboutBlock from "../components/home/AboutBlock";
import BusinessDirections from "../components/home/BusinessDirections";
import HowItWorks from "../components/home/HowItWorks";
import PopularCars from "../components/home/PopularCars";
import Reviews from "../components/home/Reviews";
import FAQ from "../components/home/FAQ";
import TrustBlock from "../components/home/TrustBlock";
import Reveal from "../components/common/Reveal";

export default function HomePage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* HERO */}
      <section>
        <Reveal>
          <Hero />
        </Reveal>
      </section>

      <section>
        <Reveal delay={100}>
          <AboutBlock />
        </Reveal>
      </section>

      <section>
        <Reveal delay={200}>
          <BusinessDirections />
        </Reveal>
      </section>

      <section>
        <Reveal delay={300}>
          <HowItWorks />
        </Reveal>
      </section>

      <section>
        <Reveal delay={400}>
          <PopularCars />
        </Reveal>
      </section>

      <section>
        <Reveal delay={500}>
          <Reviews />
        </Reveal>
      </section>

      <section>
        <Reveal delay={600}>
          <TrustBlock />
        </Reveal>
      </section>

      <section>
        <Reveal delay={700}>
          <FAQ />
        </Reveal>
      </section>

      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
