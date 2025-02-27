import Container from "@/components/Container";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import NationalDay from "@/components/NationalDay";
// import Signature from "@/components/Signature";
// import SectionFive from "@/components/SectionFive";
// import SectionFour from "@/components/SectionFour";
// import SectionSix from "@/components/SectionSix";
// import Abdulla from "@/components/Abdulla";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-y-4 items-center justify-center min-h-screen text-center text-2xl font-semibold font-Gotham-Book">
        <div>🌙 Ramadan 2025 with AlAin Farms</div>
        <div>Something Special is Coming! 🌙  </div>
      </div>
      {/* <Hero />
      <NationalDay />
      <Abdulla />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Signature />
      <Footer /> */}
    </Container>
  );
}
