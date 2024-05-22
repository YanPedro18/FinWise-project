import { Route, Routes } from "react-router-dom"
import SignIn from "./Pages/auth/sign-in"
import SignUp from "./Pages/auth/sign-up"
import Mounth from "./Pages/app/Mounth"
import DashboardHome from "./Pages/app/Dashboard/DashboardHome"


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Mounth sections={[]} title={""} />} > </Route>
      <Route path="/Dashboard" element={<DashboardHome />} > </Route>
      <Route path="/sign-in" element={<SignIn />} > </Route>
      <Route path="/sign-up" element={<SignUp />} > </Route>
    </Routes>
  )
}

export default Router