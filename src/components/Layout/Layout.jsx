import React from "react";
import { UserOutlined, TeamOutlined, DesktopOutlined, ShoppingCartOutlined, GiftOutlined, DashboardOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import avarta from "image/avarta.svg";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<Link to="/">DashBoard</Link>, '1', <DashboardOutlined />,),
    getItem(<Link to="/Product">Product</Link>, '2', <DesktopOutlined />,),
    getItem(<Link to="/User">User</Link>, 'sub1', <UserOutlined />,
        // [
        //     getItem('Tom', '3'),
        //     getItem('Bill', '4'),
        //     getItem('Alex', '5'),
        // ]
    ),
    getItem(<Link to="/Customers">Customers</Link>, 'sub2', <TeamOutlined />,
        //  [getItem('Team 1', '6'), getItem('Team 2', '8')]
    ),
    getItem(<Link to="/Orders">Orders</Link>, '9', <ShoppingCartOutlined />),
    getItem(<Link to="/Coupon">Coupon</Link>, '10', <GiftOutlined />),
];

const PrimaryLayout = ({ children, title }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // Lấy tên Username khi login
    const loggedinUser = useSelector((state) => state.auth);


    return (
        <><Helmet>
            <title>{title}</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" items={items} />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,


                        }}
                    ><div style={{
                        display: "flex",
                        width: "85%",
                        justifyContent: "flex-end",
                        gap: 20,
                    }}> <span >{loggedinUser.username}</span> <img src={avarta} alt="avarta" /></div>
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>{loggedinUser.username}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                            }}
                        >
                            {children}

                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout></>

    );
};

export default PrimaryLayout;