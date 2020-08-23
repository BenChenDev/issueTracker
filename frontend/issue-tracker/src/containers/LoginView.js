import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { Spin } from 'antd';

import * as actions from '../store/actions/auth';
import '../style/loginView.scss'

class LoginView extends Component {

  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 5,
    },
  };

  onFinish = values => {
    this.props.onAuth(values.userName, values.password);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  render() {
    let errorMessage = null;
    if (this.props.error){
      errorMessage = (
        <p>{this.props.error.message}</p>
      );
    }
    return (
      
      <div>{errorMessage}
        {
          this.props.loading ?
          //loading
          <div >
            <Spin size="latge"/>
          </div>

          :
          <Form
            className="login-form"
            {...this.layout}
            name="basic"
            initialValues={{
              remember: true
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...this.tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Button type="primary" htmlType="submit" style={{marginLeft: '10px'}}>
              <NavLink to='/signup/'>
              Sign up
              </NavLink>
            </Button>
          </Form.Item>
          </Form>
        }
      </div>
    );
  }
    
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username,password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
