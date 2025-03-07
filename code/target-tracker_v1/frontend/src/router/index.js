import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import NotFound from "../pages/404";
import Dashboard from "../pages/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App />
    },
    {
        path:'/admin',
        element: <Dashboard />
    },
    {
        path:'*',
        element: <NotFound />
    }
])

export default router