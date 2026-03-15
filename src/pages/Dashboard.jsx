import { useEffect, useState } from "react"

import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import MetricCard from "../components/MetricCard"
import RiskChart from "../components/RiskChart"
import ViolationTable from "../components/ViolationTable"
import AlertPanel from "../components/AlertPanel"

import { getViolations, getRiskDistribution } from "../api/globalApi"


/* -----------------------
FALLBACK DATA
----------------------- */

const fallbackViolations = [

{
id:1,
user_id:"emp21",
ai_tool:"ChatGPT",
prompt_text:"Give me entire customer database",
risk_level:"High",
created_at:"2026-03-15T10:32:00"
},

{
id:2,
user_id:"emp14",
ai_tool:"Gemini",
prompt_text:"Upload internal sales sheet for analysis",
risk_level:"Medium",
created_at:"2026-03-15T10:35:00"
},

{
id:3,
user_id:"emp07",
ai_tool:"Claude",
prompt_text:"Summarize marketing campaign data",
risk_level:"Safe",
created_at:"2026-03-15T10:40:00"
}

]

const fallbackRisk = [

{ risk_level:"High", count:1 },
{ risk_level:"Medium", count:1 },
{ risk_level:"Safe", count:1 }

]


export default function Dashboard(){

const [violations,setViolations] = useState(fallbackViolations)
const [riskData,setRiskData] = useState(fallbackRisk)


/* LOAD DATA FROM BACKEND */

useEffect(()=>{

async function loadDashboardData(){

try{

const violationData = await getViolations()

if(violationData && violationData.length>0){
setViolations(violationData)
}

const riskChartData = await getRiskDistribution()

if(riskChartData && riskChartData.length>0){
setRiskData(riskChartData)
}

}
catch(error){

console.error("Dashboard data error:",error)

}

}

loadDashboardData()

},[])


/* CALCULATED METRICS */

const totalPrompts = violations.length

const totalViolations = violations.length

const highRiskAlerts = violations.filter(v=>v.risk_level==="High").length

const activeUsers = new Set(violations.map(v=>v.user_id)).size


return(

<div className="flex min-h-screen bg-slate-950">

<Sidebar/>

<div className="flex-1 p-10 overflow-y-auto">

<Header/>

<div className="grid grid-cols-4 gap-6 mb-10">

<MetricCard
title="Prompts Monitored"
value={totalPrompts}
color="text-cyan-400"
/>

<MetricCard
title="Violations"
value={totalViolations}
color="text-yellow-400"
/>

<MetricCard
title="High Risk Alerts"
value={highRiskAlerts}
color="text-red-400"
/>

<MetricCard
title="Active Users"
value={activeUsers}
color="text-green-400"
/>

</div>

<div className="grid grid-cols-2 gap-6 mb-10">

<RiskChart data={riskData}/>

<AlertPanel violations={violations}/>

</div>

<ViolationTable violations={violations}/>

</div>

</div>

)

}