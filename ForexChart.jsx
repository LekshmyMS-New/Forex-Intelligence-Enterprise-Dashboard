import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ForexChart = ({ data }) => {
  return (
    <div style={{ height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#00ffcc"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForexChart;