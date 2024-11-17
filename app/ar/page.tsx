import Container from "@/components/Container";
import Footer from "@/components/Footer";
import NationalDay from "@/components/NationalDay";
import Signature from "@/components/Signature";
import SectionFive from "@/components/SectionFive";
import SectionFour from "@/components/SectionFour";
import SectionSix from "@/components/SectionSix";
import Abdulla from "@/components/Abdulla";
import HeroAr from "@/components/HeroAr";

export default function Home() {
  return (
    <Container>
      <HeroAr />
      <NationalDay />
      <Abdulla />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      {/* <Landmarks /> */}
      <Signature />
      <Footer />
    </Container>
  );
}
