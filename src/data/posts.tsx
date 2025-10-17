export interface Post {
  week: number;
  type: "Institucional" | "Educacional" | "Promocional" | "Engajamento";
  title: string;
  desc: string;
  cta: string;
}

export const posts: Post[] = [
  // 🗓 Semana 1
  {
    week: 1,
    type: "Institucional",
    title: "Missão e Valores",
    desc: "Apresentar a missão do Acelayne Gym e o compromisso com resultados reais.",
    cta: "Comenta o que te motiva a treinar!",
  },
  {
    week: 1,
    type: "Educacional",
    title: "Dica de Treino Funcional",
    desc: "Treinar certo é melhor do que treinar muito. Foca na técnica!",
    cta: "Salva esta dica para o teu treino!",
  },
  {
    week: 1,
    type: "Promocional",
    title: "Planos e Benefícios",
    desc: "Transforma o teu corpo com quem entende do assunto! Descobre os nossos planos.",
    cta: "Envia-nos mensagem e começa hoje!",
  },
  {
    week: 1,
    type: "Engajamento",
    title: "Trend de Treino",
    desc: "Quem fizer este desafio ganha o dia! Mostra a tua força.",
    cta: "Marca um amigo e participa!",
  },

  // 🗓 Semana 2
  {
    week: 2,
    type: "Institucional",
    title: "Conhece os Nossos Treinadores",
    desc: "Apresentamos a equipa que te acompanha em cada etapa da tua evolução.",
    cta: "Vem conhecer quem vai puxar por ti!",
  },
  {
    week: 2,
    type: "Educacional",
    title: "Importância do Aquecimento",
    desc: "Evita lesões e melhora o desempenho com um bom aquecimento.",
    cta: "Não saltes esta etapa!",
  },
  {
    week: 2,
    type: "Promocional",
    title: "Campanha de Amigos",
    desc: "Traz um amigo e ambos ganham 20% de desconto na mensalidade!",
    cta: "Convida já o teu parceiro de treino!",
  },
  {
    week: 2,
    type: "Engajamento",
    title: "Desafio de Agachamento",
    desc: "Quantos agachamentos consegues em 1 minuto?",
    cta: "Partilha o teu resultado!",
  },

  // 🗓 Semana 3
  {
    week: 3,
    type: "Institucional",
    title: "Histórias de Sucesso",
    desc: "Conhece membros que transformaram a sua vida com o Acelayne Gym.",
    cta: "Inspira-te e vem fazer parte!",
  },
  {
    week: 3,
    type: "Educacional",
    title: "Dica de Nutrição Pós-Treino",
    desc: "Alimentos que ajudam na recuperação muscular após o treino.",
    cta: "Guarda para a próxima refeição!",
  },
  {
    week: 3,
    type: "Promocional",
    title: "Pack de Verão",
    desc: "Prepara o teu corpo para o verão com o nosso pack especial!",
    cta: "Vagas limitadas, inscreve-te já!",
  },
  {
    week: 3,
    type: "Engajamento",
    title: "Foto no Ginásio",
    desc: "Partilha a tua melhor foto a treinar e marca-nos!",
    cta: "Queremos ver a tua energia!",
  },

  // 🗓 Semana 4
  {
    week: 4,
    type: "Institucional",
    title: "Dia do Cliente Acelayne",
    desc: "Um agradecimento especial a quem faz parte desta família fitness!",
    cta: "Marca um colega e celebra connosco!",
  },
  {
    week: 4,
    type: "Educacional",
    title: "Alongamento Correto",
    desc: "Aprende a importância do alongamento após o treino.",
    cta: "Faz do alongamento um hábito!",
  },
  {
    week: 4,
    type: "Promocional",
    title: "Plano Corporativo",
    desc: "Empresas também cuidam dos seus colaboradores com o Acelayne Gym.",
    cta: "Solicita uma proposta!",
  },
  {
    week: 4,
    type: "Engajamento",
    title: "Pergunta do Dia",
    desc: "Qual é o teu treino favorito? 💪",
    cta: "Responde nos comentários!",
  },

  // 🗓 Semana 5
  {
    week: 5,
    type: "Institucional",
    title: "Bastidores do Ginásio",
    desc: "Mostramos como preparamos o espaço e equipamentos para os treinos diários.",
    cta: "Vem conhecer os bastidores!",
  },
  {
    week: 5,
    type: "Educacional",
    title: "Recuperação Muscular",
    desc: "Dicas de descanso, hidratação e sono para otimizar os resultados.",
    cta: "Segue estas dicas!",
  },
  {
    week: 5,
    type: "Promocional",
    title: "Produtos Acelayne",
    desc: "Roupas, suplementos e acessórios para apoiar o teu treino.",
    cta: "Explora a nossa loja!",
  },
  {
    week: 5,
    type: "Engajamento",
    title: "Treino Outdoor",
    desc: "Mostra-nos como treinas ao ar livre e inspira a comunidade.",
    cta: "Marca o teu amigo de treino!",
  },

  // 🗓 Semana 6
  {
    week: 6,
    type: "Institucional",
    title: "História do Acelayne Gym",
    desc: "Descobre como começámos e a nossa missão até hoje.",
    cta: "Conhece a nossa história!",
  },
  {
    week: 6,
    type: "Educacional",
    title: "Mini Tutorial de Exercício",
    desc: "Aprende a executar um exercício chave corretamente.",
    cta: "Pratica e melhora a tua técnica!",
  },
  {
    week: 6,
    type: "Promocional",
    title: "Campanha “Traga um Amigo”",
    desc: "Vem com um amigo e ambos ganham benefícios especiais.",
    cta: "Convida já!",
  },
  {
    week: 6,
    type: "Engajamento",
    title: "Desafio Semanal",
    desc: "Participa do desafio da semana usando a nossa hashtag oficial.",
    cta: "Mostra o teu progresso!",
  },

  // 🗓 Semana 7
  {
    week: 7,
    type: "Institucional",
    title: "Frase Motivacional",
    desc: "Inspira-te com uma frase forte para impulsionar a tua semana.",
    cta: "Partilha com alguém que precisa!",
  },
  {
    week: 7,
    type: "Educacional",
    title: "Corrige Posturas Erradas",
    desc: "Evita lesões corrigindo a postura em exercícios comuns.",
    cta: "Confere estas dicas!",
  },
  {
    week: 7,
    type: "Promocional",
    title: "Promoção Relâmpago",
    desc: "Oferta especial para novos inscritos esta semana.",
    cta: "Não percas a oportunidade!",
  },
  {
    week: 7,
    type: "Engajamento",
    title: "Segunda-feira de Treino",
    desc: "Trend divertida para começar a semana com energia.",
    cta: "Mostra como tu treinas!",
  },

  // 🗓 Semana 8
  {
    week: 8,
    type: "Institucional",
    title: "Agradecimento aos Clientes",
    desc: "Obrigado por fazerem parte da família Acelayne Gym!",
    cta: "Deixa o teu comentário de agradecimento!",
  },
  {
    week: 8,
    type: "Educacional",
    title: "Curiosidade sobre Saúde",
    desc: "Fatos interessantes sobre fitness e bem-estar para aplicar no treino.",
    cta: "Aprende algo novo hoje!",
  },
  {
    week: 8,
    type: "Promocional",
    title: "Plano Anual / Fidelização",
    desc: "Benefícios exclusivos para membros que renovam ou fazem planos longos.",
    cta: "Renova já e garante vantagens!",
  },
  {
    week: 8,
    type: "Engajamento",
    title: "Retrospectiva do Mês",
    desc: "Relembra os melhores momentos e conquistas da nossa comunidade.",
    cta: "Partilha a tua evolução!",
  },
];
