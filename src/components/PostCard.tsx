import { Dumbbell } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Post {
  type: string;
  title: string;
  desc: string;
  cta?: string;
  bestTime?: string;
}

export default function PostCard({ type, title, desc, cta, bestTime }: Post) {
  return (
    <Card className="shadow-md border border-gray-200">
      {/* Card Header */}
      <CardHeader className="flex items-center gap-2 flex-col">
        <Badge
          variant={"outline"}
          className="flex items-center gap-2 text-orange-600 border-gray-300 rounded-2xl py-1 px-2"
        >
          <Dumbbell /> {type}
        </Badge>
        <CardTitle className="text-sm text-black font-semibold mb-2">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Card Content */}
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{desc}</p>
        {cta && (
          <p className="text-sm font-medium text-gray-800">CTA: {cta} </p>
        )}
        {bestTime && (
          <p className="text-sm font-medium text-gray-800">
            Melhor horário: {bestTime}{" "}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
