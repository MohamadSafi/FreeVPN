import Footer from "@/components/custom/Footer";
import InstructionHero from "@/components/custom/InstructionHero";
import InstructionSteps from "@/components/custom/InstructionSteps";
import PageNavbar from "@/components/custom/PageNavbar";

export default function HowToConnect() {
  return (
    <main>
      <div className="lg:mx-48 xl:mx-56 2xl:mx-56 3xl:mx-56 mb-24">
        <PageNavbar />
        <InstructionHero />
        <InstructionSteps />
      </div>
      <Footer />
    </main>
  );
}
