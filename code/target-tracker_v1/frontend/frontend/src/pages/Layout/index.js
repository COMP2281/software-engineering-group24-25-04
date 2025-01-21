// import React from 'react';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer } = Layout;
//
// import { Layout, Menu, Popconfirm } from 'antd'
// import {
//     HomeOutlined,
//     DiffOutlined,
//     EditOutlined,
//     LogoutOutlined,
// } from '@ant-design/icons'
// import './index.scss'
//
//
//
// const { Header, Sider } = Layout
//
// const items = [
//     {
//         label: 'Home',
//         key: '1',
//         icon: <HomeOutlined />,
//     },
//     {
//         label: 'Admin',
//         key: '2',
//         icon: <DiffOutlined />,
//     },
//     {
//         label: 'Create',
//         key: '3',
//         icon: <EditOutlined />,
//     },
// ]
//
// const MyLayout = () => {
//     return (
//         <Layout>
//             <Header className="header">
//                 111
//                 {/*<div className="logo" />*/}
//                 {/*<div className="user-info">*/}
//                 {/*    <span className="user-name">用户名</span>*/}
//                 {/*    <span className="user-logout">*/}
//                 {/*        <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">*/}
//                 {/*          <LogoutOutlined /> 退出*/}
//                 {/*        </Popconfirm>*/}
//                 {/*    </span>*/}
//                 {/*</div>*/}
//             </Header>
//             <Layout>
//                 <Sider width={200} className="site-layout-background">
//                     <Menu
//                         mode="inline"
//                         theme="dark"
//                         defaultSelectedKeys={['1']}
//                         items={items}
//                         style={{ height: '100%', borderRight: 0 }}></Menu>
//                 </Sider>
//                 <Layout className="layout-content" style={{ padding: 20 }}>
//                     内容
//                 </Layout>
//             </Layout>
//         </Layout>
//     )
// }
// export default MyLayout


import React, { useState } from 'react';
import './index.scss'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LastLoginOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, Popconfirm, theme} from 'antd';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {logout} from "../../store/modules/user";
import {useDispatch} from "react-redux";
const { Header, Sider, Content } = Layout;

const items = [
    {
        label: 'Home',
        key: '/home',
        icon: <HomeOutlined />,
    },
    {
        label: 'Tasks',
        key: '/tasks',
        icon: <DiffOutlined />,
    },
    {
        label: 'My Task',
        key: '/personaltask',
        icon: <DiffOutlined />,
    },
    {
        label: 'Create',
        key: '/create',
        icon: <EditOutlined />,
    },
]

const MyLayout = () => {

    const navigate = useNavigate()
    const onMenuClick = (values) => {
        // console.log("Menu点击，values", values)
        const path = values.key
        navigate(path)
    }

    const location = useLocation()
    const selectedKey = location.pathname
    // console.log("location", location.pathname)

    const dispatch = useDispatch()
    const onConfirmLogout = () => {
        console.log("onConfirmLogout")
        dispatch(logout())
        navigate('/login')
    }

    return (
        <Layout>
            <Layout>
                <Header>
                    <div className="logo" />
                    <div className="user-info">
                        <span className="user-name">用户名</span>
                        <span className="user-logout">
                            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirmLogout}>
                              <LogoutOutlined /> 退出
                            </Popconfirm>
                        </span>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={['/home']}
                            selectedKeys={selectedKey}
                            onClick={onMenuClick}
                            items={items}
                            style={{ height: '100%', borderRight: 0 }}></Menu>
                    </Sider>
                    <Layout className="layout-content" style={{ padding: 20 }}>
                        {/*二级路由的出口*/}
                        <Outlet />
                    </Layout>
                </Layout>
            </Layout>

        </Layout>
    );
};
export default MyLayout;