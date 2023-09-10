import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ServerTable() {
  return (
    <Table>
      <TableCaption>Table Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Country</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Health</TableHead>
          <TableHead className="text-right">Connect</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">SY</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>100%</TableCell>
          <TableCell className="text-right">Click here</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
