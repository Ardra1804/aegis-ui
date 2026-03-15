import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"

import { getViolations } from "../api/globalApi"

/* FALLBACK DATA */

const fallbackViolations = [
{
time:"10:31",
user:"emp02",
type:"API Key Leak",
severity:"High"
},
{
time:"11:02",
user:"emp14",
type:"Confidential Document",
severity:"Medium"
},
{
time:"11:25",
user:"emp07",
type:"Password Detection",
severity:"High"
}
]

export default function Violations(){

const [violations,setViolations] = useState(fallbackViolations)

/* LOAD DATA FROM API */

useEffect(()=>{

async function loadViolations(){

try{

const data = await getViolations()

if(data && data.length>0){

const mapped = data.map(v=>({

time:new Date(v.created_at).toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
}),

user:v.user_id,

type:v.violation_type || "AI Policy Violation",

severity:v.risk_level

}))

setViolations(mapped)

}

}
catch(error){

console.error("Violations API error:",error)

}

}

loadViolations()

},[])

return(

<div className="flex min-h-screen bg-slate-950">

<Sidebar/>

<div className="flex-1 p-10 overflow-y-auto">

<h2 className="text-3xl text-red-400 mb-8">
Policy Violations
</h2>

<div className="grid gap-6">

{violations.map((v,i)=>(

<div key={i} className="bg-slate-900 border border-red-500/30 p-6 rounded-xl">

<p className="text-gray-400">{v.time}</p>

<h3 className="text-xl text-white mt-2">
{v.type}
</h3>

<p className="text-gray-300 mt-2">
User: {v.user}
</p>

<p className={`font-bold mt-2 ${
v.severity==="High"
? "text-red-400"
: v.severity==="Medium"
? "text-yellow-400"
: "text-green-400"
}`}>
Severity: {v.severity}
</p>

</div>

))}

</div>

</div>

</div>

)

}