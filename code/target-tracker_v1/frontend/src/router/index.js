import {createBrowserRouter} from "react-router-dom";

import Layout from "../pages/Layout"
import Login from "../pages/Login"
import Register from "../pages/Register";
import AuthRoute from "../components/AuthRoute";
import Home from "../pages/Home";
import TaskList from "../pages/TaskList";
import PersonalTask from "../pages/PersonalTask";
import CreateTask from "../pages/CreateTask";
import AdminPanel from "../pages/AdminPanel";
import AdminRoute from "../components/AdminRoute";
import Forbidden from "../pages/403";
import NotFound from "../pages/404";
import AdminHome from "../pages/AdminPanel/AdminHome";

const router = createBrowserRouter([
    {
        path:'/',
        element: <AuthRoute><Layout /></AuthRoute>,
        // element: <Layout />,
        children:[
            {
                path: 'home',
                index: true,
                element: <Home/>
            },
            {
                path: 'tasks',
                element: <TaskList/>
            },
            {
                path:'personaltask',
                element: <PersonalTask/>
            },
            {
                path:'create',
                element: <CreateTask/>
            },
            {
                path:'about',
                element: <div>关于</div>
            }
        ]
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/register',
        element: <Register />
    },
    {
        path:'/admin',
        element: <AdminRoute><AdminPanel /></AdminRoute>,
        children:[
            {
                path: 'home',
                // element: <div>欢迎来到管理员面板</div>
                element: <AdminHome />
            },
            {
                path:'user',
                element: <div>用户管理</div>
            },
        ]
    },
    {
        path:'/403',
        element: <Forbidden />
    },
    {
        path:'*',
        element: <NotFound />
    }
])

export default router