import { Route, Routes } from "react-router-dom"
import SignIn from "./Pages/auth/sign-in"
import Mounth from "./Pages/app/Mounth"
import DashboardHome from "./Pages/app/DashboardHome"


function Router() {
  return (
        <Routes>
            <Route path="/" element={<Mounth />} > </Route>
            <Route path="/Dashboard" element={<DashboardHome />} > </Route>
            <Route path="/sign-in" element={<SignIn />} > </Route>
        </Routes>
  )
}

export default Router