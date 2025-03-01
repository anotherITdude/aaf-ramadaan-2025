import Container from "@/components/Container";
// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionFour from "@/components/SectionFour";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Container>
  );
}
