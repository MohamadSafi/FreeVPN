import ConnectTable from "@/components/custom/ConnectTable";
import Navbar from "@/components/custom/PageNavbar";

export default function servers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <Navbar />
      <ConnectTable />
    </main>
  );
}
