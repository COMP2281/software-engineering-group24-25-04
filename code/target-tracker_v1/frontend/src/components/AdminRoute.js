import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {message} from "antd";

const AdminRoute = ({ children }) => {
    const loginStatus = useSelector((state) => state.user.loginStatus);
    const userRole = useSelector((state) => state.user.userRole);

    console.log('AdminRoute current userRole', userRole)

    if(loginStatus === 'false'){
        return <Navigate to="/login" replace />;
    }

    // 如果用户不是管理员，重定向到主页或登录页
    if (userRole !== 'admin') {
        message.error("您没有权限访问此页面")
        return <Navigate to="/403" replace />;
    }

    return children;
};

export default AdminRoute;
