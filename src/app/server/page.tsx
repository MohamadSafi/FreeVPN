import ConnectTable from "@/components/custom/ConnectTable";
import PageNavbar from "@/components/custom/PageNavbar";

export default function servers() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20 justify-center">
      <PageNavbar />
      <ConnectTable />
    </main>
  );
}
