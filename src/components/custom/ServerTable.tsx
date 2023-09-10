import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import "node_modules/flag-icons/css/flag-icons.min.css";
import { Progress } from "@/components/ui/progress";

export default function ServerTable() {
  return (
    <Table>
      <TableCaption>
        Choose a country and download the .ovpn file to connect
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Country</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Health</TableHead>
          <TableHead className="text-right">Get Access</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium flex items-center gap-4">
            <span className="fi fi-us p-3"></span>
            <p className="font-medium">United States</p>
          </TableCell>
          <TableCell className="text-green-600 font-bold">ONLINE</TableCell>
          <TableCell className="flex items-center gap-4">
            90%
            <Progress value={90} className="bg-gray-300 text-green-600 w-24" />
          </TableCell>
          <TableCell className="text-right">
            <Link href="" className="hover:underline">
              Click here
            </Link>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium flex items-center gap-4">
            <span className="fi fi-gb p-3"></span>
            <p className="font-medium">United Kingdom</p>
          </TableCell>
          <TableCell className="text-green-600 font-bold">ONLINE</TableCell>
          <TableCell className="flex items-center gap-4">
            75%
            <Progress value={75} className="bg-gray-300 text-green-600 w-24" />
          </TableCell>
          <TableCell className="text-right">
            <Link href="" className="hover:underline">
              Click here
            </Link>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium flex items-center gap-4">
            <span className="fi fi-nl p-3"></span>
            <p className="font-medium">Netherlands</p>
          </TableCell>
          <TableCell className="text-green-600 font-bold">ONLINE</TableCell>
          <TableCell className="flex items-center gap-4">
            80%
            <Progress value={80} className="bg-gray-300 text-green-600 w-24" />
          </TableCell>
          <TableCell className="text-right">
            <Link href="" className="hover:underline">
              Click here
            </Link>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium flex items-center gap-4">
            <span className="fi fi-ru p-3"></span>
            <p className="font-medium">Russia</p>
          </TableCell>
          <TableCell className="text-red-600 font-bold">OFFLINE</TableCell>
          <TableCell className="flex items-center gap-4">
            0%
            <Progress value={0} className="bg-gray-300 text-green-600 w-24" />
          </TableCell>
          <TableCell className="text-right">
            <Link href="" className="hover:underline">
              Click here
            </Link>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium flex items-center gap-4">
            <span className="fi fi-sy p-3"></span>
            <p className="font-medium">Syria</p>
          </TableCell>
          <TableCell className="text-red-600 font-bold">OFFLINE</TableCell>
          <TableCell className="flex items-center gap-4">
            0%
            <Progress value={0} className="bg-gray-300 text-green-600 w-24" />
          </TableCell>
          <TableCell className="text-right">
            <Link href="" className="hover:underline">
              Click here
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
