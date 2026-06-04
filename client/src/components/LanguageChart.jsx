import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#8b5cf6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
];

const LanguageChart = ({ data }) => {

  if (!data) return null;

  // Convert object into array
  const chartData = Object.entries(data).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (

    <div
      id="chart-section"
      className="
        max-w-5xl
        mx-auto
        mt-10
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        backdrop-blur-xl
      "
    >

      <h1 className="text-4xl font-bold text-cyan-400 mb-10">

        Language Intelligence

      </h1>

      <div className="w-full h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={140}
              dataKey="value"
              label
            >

              {chartData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
};

export default LanguageChart;