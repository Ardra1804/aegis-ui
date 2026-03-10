import { BrowserRouter, Routes, Route } from "react-router-dom"

import SplashScreen from "./pages/SplashScreen"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Dashboard from "./pages/Dashboard"
import Monitoring from "./pages/Monitoring"
import Violations from "./pages/Violations"
import Policies from "./pages/Policies"

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<SplashScreen/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/monitoring" element={<Monitoring/>}/>
<Route path="/violations" element={<Violations/>}/>
<Route path="/policies" element={<Policies/>}/>

</Routes>

</BrowserRouter>

)

}

export default App