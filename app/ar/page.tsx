import Container from "@/components/Container";
import SectionFour from "@/components/SectionFour";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import HeroAr from "@/components/HeroAr";
export default function Home() {
  return (
    <Container>
      <HeroAr />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Container>
  );
}
