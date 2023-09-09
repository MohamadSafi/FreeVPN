import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
    </main>
  );
}
