export const mockPosts = [
  {
    id: 1,
    title: "The Rise of Mobile Esports: A New Frontier",
    slug: "rise-of-mobile-esports",
    excerpt:
      "Exploring the growing trend of competitive gaming on smartphones and tablets.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    publishedAt: "2023-08-15",
    categories: ["Mobile Gaming", "Industry Trends"],
  },
  {
    id: 2,
    title: "Top 5 Strategies for Dominating in Battle Royale Games",
    slug: "top-5-battle-royale-strategies",
    excerpt:
      "Expert tips and tricks to help you secure more victories in popular battle royale titles.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    publishedAt: "2023-08-10",
    categories: ["Strategy", "Battle Royale"],
  },
  // ... (include all other mock posts)
];

export const mockTeams = [
  {
    id: 1,
    name: "Cloud9",
    slug: "cloud9",
    description:
      "One of the most recognizable brands in esports, competing across multiple titles.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "Multiple",
    achievements: [
      "LoL World Championship Quarterfinalists",
      "CS:GO Major Champions",
    ],
  },
  {
    id: 2,
    name: "Team Liquid",
    slug: "team-liquid",
    description:
      "A multi-regional esports powerhouse with top teams in various games.",
    logoUrl: "/placeholder.svg?height=200&width=200",
    primaryGame: "Multiple",
    achievements: [
      "The International 2017 Champions",
      "Intel Grand Slam Season 2 Winners",
    ],
  },
  // ... (include all other mock teams)
];

export const mockEvents = [
  {
    id: 1,
    name: "The International 2023",
    slug: "the-international-2023",
    description:
      "The biggest annual Dota 2 tournament, featuring the world's top teams.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2023-10-12",
    endDate: "2023-10-29",
    location: "Seattle, USA",
    game: "Dota 2",
    prizePool: "$40,000,000+",
  },
  {
    id: 2,
    name: "League of Legends World Championship 2023",
    slug: "lol-worlds-2023",
    description:
      "The pinnacle of League of Legends esports, crowning the world's best team.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    startDate: "2023-10-10",
    endDate: "2023-11-19",
    location: "South Korea",
    game: "League of Legends",
    prizePool: "$2,225,000+",
  },
  // ... (include all other mock events)
];
