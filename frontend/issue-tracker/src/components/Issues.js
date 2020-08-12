import React from 'react';
import { List, Avatar } from 'antd';

const Issues = (props) => {
  return (
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    renderItem={item => (
      <List.Item
        key={item.id}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={`${item.id}`}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
    />
  );
}

export default Issues;
