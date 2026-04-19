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
    <div className="home-page">
      <section className="block">
        <Reveal>
          <Hero />
        </Reveal>
      </section>

      <section className="block">
        <Reveal delay={100}>
          <AboutBlock />
        </Reveal>
      </section>

      <section className="block">
        <Reveal delay={200}>
          <BusinessDirections />
        </Reveal>
      </section>

      <section className="block">
        <Reveal delay={300}>
          <HowItWorks />
        </Reveal>
      </section>

      <section className="block">
        <Reveal delay={400}>
          <PopularCars />
        </Reveal>
      </section>

      <section className="block">
        <Reveal delay={500}>
          <Reviews />
        </Reveal>
      </section>

      <section className="block">
        <Reveal delay={600}>
          <TrustBlock />
        </Reveal>
      </section>

      <section className="block">
        <Reveal delay={700}>
          <FAQ />
        </Reveal>
      </section>

      <style>
        {`
.home-page {
  overflow-x: hidden;
}

/* DEFAULT spacing system */
.block {
  padding: 80px 40px;
}

/* MOBILE spacing system */
@media (max-width: 768px) {
  .block {
    padding: 40px 16px;
  }
}
        `}
      </style>
    </div>
  );
}
