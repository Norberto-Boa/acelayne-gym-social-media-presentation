import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { insights } from "../data/insights";

export default function InsightsTable() {
  return (
    <Table>
      <TableCaption>
        Dados a serem extraidos do Meta (Facebook & Instagram){" "}
      </TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-[100px] text-orange-600">
            🚀 Objectivo
          </TableHead>
          <TableHead className="w-[200px] text-orange-600">🎯 Meta</TableHead>
          <TableHead className="w-[200px] text-orange-600">
            📈 Indicador
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {insights.map((insight) => (
          <TableRow key={insight.id}>
            <TableCell className="font-semibold">{insight.goal}</TableCell>
            <TableCell>{insight.target}</TableCell>
            <TableCell>{insight.indicator}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
