import React from "react";
import DashboardPage from "../pages/Dashboard";
import DashboardLayout from "../pages/Dashboard/Layout";
import { IModuleRouter } from "../Home";


export const DashboardRoutes: IModuleRouter = {
    key: "dashboard",
    routes:[
        {
            path: "/",
            element: <DashboardPage />
        },
        {
            path: "/collections",
            element: <DashboardPage />
        },
        {
            path: "/settings",
            element: <DashboardPage />
        }
    ],
    layout: DashboardLayout
}