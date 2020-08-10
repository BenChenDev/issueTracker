import React from 'react';
import { Form, Input, Button } from 'antd';

const CustomForm = () => {
  return (
    <>
      <Form>
        <Form.Item label="Title">
          <Input placeholder="Put a title here" />
        </Form.Item>
        <Form.Item label="Content">
          <Input placeholder="Enter some content here ..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomForm;