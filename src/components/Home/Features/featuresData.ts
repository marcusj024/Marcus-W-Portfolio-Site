export interface Feature {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "SQL & Data Management",
    desc: "Mastering relational databases and back-end logic through the VetBoss curriculum.",
    icon: "💾"
  },
  {
    id: 2,
    title: "Military Leadership",
    desc: "10 years as a U.S. Army Staff Sergeant (E-6). Bringing mission-focus to development.",
    icon: "🎖️"
  },
  {
    id: 3,
    title: "Logistical Systems",
    desc: "Experience as a 92A/92F specialist translates to efficient software architectures.",
    icon: "⚙️"
  }
];

export default featuresData;