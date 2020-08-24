import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  Tooltip,
  Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import * as actions from '../store/actions/auth';

class SignupView extends Component{

  onFinish = values => {
    this.props.onAuth(values.username, values.email, values.password1, values.password2);
  };

  render() {

    return (
      <Form
        name="register"
        onFinish={this.onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password1"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="password2"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rules, value) {
                if (!value || getFieldValue('password1') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
            <Button type="primary" htmlType="submit" style={{marginLeft: '10px'}}>
              <NavLink to='/login/'>
              Login
              </NavLink>
            </Button>
          </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth:(username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupView);