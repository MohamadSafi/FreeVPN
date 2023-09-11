"use client";
import Features from "@/components/custom/Features";
import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import ServerTable from "@/components/custom/ServerTable";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
      <ServerTable />
      <Features />
    </main>
  );
}
