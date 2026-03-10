import { useNavigate } from "react-router-dom"

export default function Login(){

const navigate = useNavigate()

function handleLogin(e){
e.preventDefault()

// later replace with API
navigate("/dashboard")
}

return(

<div className="min-h-screen flex items-center justify-center bg-slate-950">

<div className="bg-slate-900 border border-cyan-500/30 p-10 rounded-xl w-96">

<h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
Admin Login
</h2>

<form onSubmit={handleLogin} className="space-y-4">

<input
type="email"
placeholder="Admin Email"
className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white"
/>

<input
type="password"
placeholder="Password"
className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white"
/>

<button
className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded font-bold"
>
Login
</button>

</form>

<p className="text-gray-400 text-sm mt-4 text-center">
Don't have an account?
<span
onClick={()=>navigate("/register")}
className="text-cyan-400 cursor-pointer ml-2"
>
Register
</span>
</p>

</div>

</div>

)

}