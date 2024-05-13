import { Route, Routes } from "react-router-dom"
import SignIn from "./Pages/auth/sign-in"
import DashboardHome from "./Pages/app/DashboardHome"
import SignUp from "./Pages/auth/sign-up"
import Mounth from "./Pages/app/Mounth"


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Mounth />} > </Route>
      <Route path="/Dashboard" element={<DashboardHome />} > </Route>
      <Route path="/sign-in" element={<SignIn />} > </Route>
      <Route path="/sign-up" element={<SignUp />} > </Route>
    </Routes>
  )
}

export default Router