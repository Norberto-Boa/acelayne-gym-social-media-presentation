import { useState } from "react";
import PostCard from "./components/PostCard";
import WeekTabs from "./components/WeekTabs";
import { posts } from "./data/posts";
import { AnimatePresence, motion } from "motion/react";
import { ScrollArea } from "./components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { insights } from "./data/insights";

function App() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const weekPosts = posts.filter((p) => p.week === selectedWeek);

  return (
    <div className="min-h-screen bg-gtay-50 p-8 max-w-6xl mx-auto">
      <motion.h1
        className="text-3xl font-bold text-center text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🏋️‍♂️ Plano de Gestão de Mídia Social – Acelayne Gym
      </motion.h1>

      <WeekTabs selected={selectedWeek} onSelect={setSelectedWeek} />

      <ScrollArea className=" md:h-[460px] lg:h-[490px] h-[600px] p-2">
        <div className="min-h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedWeek}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {weekPosts.map((p) => (
                <PostCard key={p.title} {...p} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Insights */}
      <div className="mx-auto my-10">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          📊 Métricas de Desempenho
        </h2>

        <Table>
          <TableCaption>
            Dados a serem extraidos do Meta (Facebook & Instagram){" "}
          </TableCaption>
          <TableHeader>
            <TableRow className="">
              <TableHead className="w-[100px] text-orange-600">
                🚀 Objectivo
              </TableHead>
              <TableHead className="w-[200px] text-orange-600">
                🎯 Meta
              </TableHead>
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
      </div>

      {/*Notas de Design  */}
      <div className="mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          🎨 Notas de Design
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Cores:</strong> Laranja (#FF6600), Preto (#1A1A1A), Cinza
            claro (#E5E5E5)
          </li>
          <li>
            <strong>Fontes:</strong> Bebas Neue (título), Montserrat / Poppins
            (texto)
          </li>
          <li>
            <strong>Layout:</strong> Separar semanas em cards, usar ícones e
            espaçamento de 16px
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
