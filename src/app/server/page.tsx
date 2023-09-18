import ConnectTable from "@/components/custom/ConnectTable";
import PageNavbar from "@/components/custom/PageNavbar";

export default function servers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <PageNavbar />
      <ConnectTable />
    </main>
  );
}
