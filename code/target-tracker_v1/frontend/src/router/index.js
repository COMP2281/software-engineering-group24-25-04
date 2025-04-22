import {createBrowserRouter} from "react-router-dom";
import React from 'react';
import App from "../App";
import NotFound from "../pages/404";
import Dashboard from "../Components/Dashboard/Dashboard";
import AdminDashboard from "../pages/ManagerDashboard/AdminDashboard";
import AdminStatistic from "../pages/ManagerDashboard/AdminStatistic";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App />
    },

    {
        path: '/user/dashboard',
        element: <Dashboard />
    },
    {
        path:'/admin',
        element: <AdminDashboard />
    },
    {
        path:'/statistic',
        element: <AdminStatistic />
    },
    {
        path:'*',
        element: <NotFound />
    }
])

export default router