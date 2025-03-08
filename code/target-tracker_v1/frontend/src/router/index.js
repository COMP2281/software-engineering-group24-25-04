import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import NotFound from "../pages/404";
import Dashboard from "../Components/Dashboard/Dashboard";
import AdminDashboard from "../pages/ManagerDashboard/AdminDashboard";


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
        path:'*',
        element: <NotFound />
    }
])

export default router