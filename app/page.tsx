import Container from "@/components/Container";
// import Footer from "@/components/Footer";
 import Hero from "@/components/Hero";
// import NationalDay from "@/components/NationalDay";
// import Signature from "@/components/Signature";
// import SectionFive from "@/components/SectionFive";
// import SectionFour from "@/components/SectionFour";
// import SectionSix from "@/components/SectionSix";
// import Abdulla from "@/components/Abdulla";

export default function Home() {
  return (
    <Container>
     
       
      
      <Hero />
      <div className="flex flex-col min-h-[1000px] items-center justify-center">
        <h1>Something Special is Coming! 🌙</h1>
      </div>
      {/*<NationalDay />
      <Abdulla />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Signature />
      <Footer /> */}
    </Container>
  );
}
