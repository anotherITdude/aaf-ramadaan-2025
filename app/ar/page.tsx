import Container from "@/components/Container";
import SectionFour from "@/components/SectionFour";
import SectionTwo from "@/components/SectionTwo";
import HeroAr from "@/components/HeroAr";
import VideoSection from "@/components/VideoSection";
export default function Home() {
  return (
    <Container>
      <SectionTwo />
      <VideoSection />
      <SectionFour />
      <HeroAr />
    </Container>
  );
}
