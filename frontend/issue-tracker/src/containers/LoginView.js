import React, { Component } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

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
    console.log('Success:', values);
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
    
    return (
      <Form
        className="login-view"
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
        </Form.Item>
      </Form>
    );
  }
    
}

export default LoginView;
