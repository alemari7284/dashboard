import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
  const data = [
    {
      name: "Sun",
      "Project X": 35,
      "Project Y": 10,
    },
    {
      name: "Mon",
      "Project X": 28,
      "Project Y": 32,
    },
    {
      name: "Tue",
      "Project X": 32,
      "Project Y": 25,
    },
    {
      name: "Wed",
      "Project X": 42,
      "Project Y": 33,
    },
    {
      name: "Thu",
      "Project X": 39,
      "Project Y": 28,
    },
    {
      name: "Fri",
      "Project X": 33,
      "Project Y": 21,
    },
  ];
  return (
    <div className="chartContainer">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Project X" stackId="a" fill="#ffd966" />
          <Bar dataKey="Project Y" stackId="a" fill="#000000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
