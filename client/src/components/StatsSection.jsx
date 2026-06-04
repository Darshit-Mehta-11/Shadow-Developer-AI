import {
  GitBranch,
  Brain,
  Activity,
  Briefcase,
} from "lucide-react";

const stats = [
  {
    title: "GitHub Activity",
    value: "87%",
    icon: <GitBranch size={35} />,
  },
  {
    title: "AI Productivity",
    value: "91%",
    icon: <Brain size={35} />,
  },
  {
    title: "Consistency",
    value: "76%",
    icon: <Activity size={35} />,
  },
  {
    title: "Internship Readiness",
    value: "69%",
    icon: <Briefcase size={35} />,
  },
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 px-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:scale-105 hover:border-cyan-400 transition-all duration-300"
        >
          <div className="text-cyan-400 mb-4">
            {item.icon}
          </div>

          <h2 className="text-gray-300">
            {item.title}
          </h2>

          <p className="text-4xl font-bold mt-4">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;