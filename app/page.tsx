import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionFour from "@/components/SectionFour";
import SectionTwo from "@/components/SectionTwo";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <Container>
      <SectionTwo />
      <VideoSection />
      
      <SectionFour />
      <Hero />
    </Container>
  );
}
