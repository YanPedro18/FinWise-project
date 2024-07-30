import { createBrowserRouter } from "react-router-dom"
import SignIn from "./Pages/auth/sign-in"
import SignUp from "./Pages/auth/sign-up"
import Mounth from "./Pages/app/Mounth"
import { AppLayout } from "./Pages/_layouts/app"
import Userpage from "./Pages/app/UserPage/Userpage"
import DashboardHome from "./Pages/app/Dashboard/DashboardHome"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: "/", element: <DashboardHome /> }]
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: "/Userpage", element: <Userpage /> }]
  },
  {
    path: '/mounth',
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

      
