"use client";
import Features from "@/components/custom/Features";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/HomeNavbar";
import ServerTable from "@/components/custom/ServerTable";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="px-4 md:px-20 lg:px-20 xl:px-20 2xl:px-20">
        <Navbar />
        <Hero />
        <ServerTable />
        <Features />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
};
export default Home;
