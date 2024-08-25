import { Container } from "@/components/container";
import { FadeIn } from "../fade-in";

export const Usps = () => {
  return (
    <Container className="text-white text-4xl font-bold py-36 space-y-12 max-w-[692px] relative z-20">
      <FadeIn>
        <p>Eagles are powerful birds known for their incredible strength.</p>
      </FadeIn>
      <FadeIn>
        <p>As top predators, they symbolize freedom and power.</p>
      </FadeIn>
      <FadeIn>
        <p>Eagles are renowned for their exceptional eyesight.</p>
      </FadeIn>
      <FadeIn>
        <p>Their vision is four to five times sharper than that of a human.</p>
      </FadeIn>
    </Container>
  );
};
