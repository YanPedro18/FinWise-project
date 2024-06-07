import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";

export function AppLayout() {
    return (
        <>
           <div>
           <Header /> 
           </div>
            <div>
                <h1>Dashboard</h1>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    );
}
