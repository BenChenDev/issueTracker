import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import '../style/main.scss';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) =>{
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/issues">All Issues</Link>
          </Menu.Item>
          {//do condictional check since we passed the isAuthentication in here
            props.isAuthenticated ? 
            <Menu.Item key="2">
              Logout
            </Menu.Item>
            :
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
          }
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {props.children}
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default CustomLayout;