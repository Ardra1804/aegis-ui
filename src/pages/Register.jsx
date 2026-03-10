import { useNavigate } from "react-router-dom"

export default function Register(){

const navigate = useNavigate()

function handleRegister(e){
e.preventDefault()

// later connect API
navigate("/login")
}

return(

<div className="min-h-screen flex items-center justify-center bg-slate-950">

<div className="bg-slate-900 border border-cyan-500/30 p-10 rounded-xl w-96">

<h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
Admin Registration
</h2>

<form onSubmit={handleRegister} className="space-y-4">

<input
type="text"
placeholder="Admin Name"
className="w-full p-3 rounded bg-slate-800 border border-slate-700 text-white"
/>

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
Register
</button>

</form>

<p className="text-gray-400 text-sm mt-4 text-center">
Already have an account?
<span
onClick={()=>navigate("/login")}
className="text-cyan-400 cursor-pointer ml-2"
>
Login
</span>
</p>

</div>

</div>

)

}