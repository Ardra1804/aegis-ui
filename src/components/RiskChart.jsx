import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const COLORS = ["#22c55e", "#facc15", "#ef4444"]

export default function RiskChart({ data = [] }){

/* Convert backend format → chart format */

const chartData = data.map(item => ({
  name: item.risk_level,
  value: item.count
}))

return(

<div className="bg-slate-800/60 border border-cyan-500/20 p-6 rounded-xl">

<h3 className="text-lg mb-4 text-gray-300">
Risk Distribution
</h3>

<div className="flex justify-center">

<PieChart width={350} height={250}>

<Pie
data={chartData}
dataKey="value"
nameKey="name"
cx="50%"
cy="50%"
outerRadius={80}
label
>

{chartData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index % COLORS.length]}/>
))}

</Pie>

<Tooltip/>

<Legend
verticalAlign="bottom"
iconType="circle"
wrapperStyle={{ color: "#d1d5db" }}
/>

</PieChart>

</div>

</div>

)

}