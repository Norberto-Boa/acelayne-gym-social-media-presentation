export interface Insights {
  id: number;
  goal: string;
  target: string;
  indicator: string;
}

export const insights: Insights[] = [
  {
    id: 1,
    goal: "Alcance",
    indicator: "Impressões e alcance das publicações",
    target: "Aumentar o alcance em 10% ao longo do mês",
  },
  {
    id: 2,
    goal: "Engajamento",
    indicator: "Likes, comentários e partilhas",
    target: "Aumentar o alcance em 10% ao longo do mês",
  },
  {
    id: 3,
    goal: "Crescimento",
    indicator: "Novos seguidores",
    target: "Aumentar o alcance em 5% ao longo do mês",
  },
  {
    id: 4,
    goal: "Conversão",
    indicator: "5 leads por semana",
    target:
      "Receber 5 leads/mensagens diretas por semana através das publicações",
  },
  {
    id: 5,
    goal: "Retenção",
    indicator: "Visualizações de stories",
    target: "Manter constante em 70% durante o mês",
  },
];
