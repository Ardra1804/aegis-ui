const BASE_URL = "http://localhost:5000/api"

/* -------------------------------
GET ALL VIOLATIONS
--------------------------------*/

export const getViolations = async () => {

try{

const response = await fetch(`${BASE_URL}/violations`)
const data = await response.json()

return data

}
catch(error){

console.error("Error fetching violations:",error)
return []

}

}


/* -------------------------------
GET RISK DISTRIBUTION
--------------------------------*/

export const getRiskDistribution = async () => {

try{

const response = await fetch(`${BASE_URL}/violations/risk-distribution`)
const data = await response.json()

return data

}
catch(error){

console.error("Error fetching risk distribution:",error)
return []

}

}


/* -------------------------------
LOG NEW PROMPT VIOLATION
--------------------------------*/

export const logViolation = async (violationData) => {

try{

const response = await fetch(`${BASE_URL}/violations/log`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(violationData)

})

const data = await response.json()

return data

}
catch(error){

console.error("Error logging violation:",error)

}

}