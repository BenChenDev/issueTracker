import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';

import { logout }from '../store/actions/auth';
import '../style/main.scss';

const { Header, Content, Footer } = Layout;

class CustomLayout extends Component {
  render () {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to="/issues">All Issues</Link>
            </Menu.Item>
            {//do condictional check since we passed the isAuthentication in here
              this.props.isAuthenticated ? 
              <Menu.Item key="2" onClick={this.props.logout}>
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
            {this.props.children}
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(CustomLayout);