import { Route, Routes, createBrowserRouter } from "react-router-dom"
import SignIn from "./Pages/auth/sign-in"
import SignUp from "./Pages/auth/sign-up"
import Mounth from "./Pages/app/Mounth"
import DashboardHome from "./Pages/app/Dashboard/DashboardHome"
import Userpage from "./Pages/app/userpage/Userpage"
import { AppLayout } from "./Pages/_layouts/app"
import Dashboard from "@mui/icons-material/Dashboard"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }]
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: "/", element: <Userpage /> }]
  },
  {
    path: '/Mounth',
    element: <Mounth sections={[]} title={""} />,

  },
  {
    path: '/sign-in',
    element: <SignIn />,

  },
  {
    path: '/sign-up',
    element: <SignUp />,

  },
])

      
