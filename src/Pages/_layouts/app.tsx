import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <>
           
            <div>
                <h1>Dashboard</h1>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    );
}
