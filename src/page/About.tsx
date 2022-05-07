import React from "react";
import {
  Table, Form, Input, Button,
} from 'antd';
import { useRequest }  from  'ahooks';

const About = () => {

  const getList = () => {
    // const { data } = useRequest();

  }

  const columns = [{
    title: '姓名',
  }, {
    title: '年龄',
  }]
  return (
    <>
       <div>
          <Form layout="inline">
            <Form.Item label="姓名">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button>查询</Button>
            </Form.Item>
          </Form>
       </div>
       <Table columns={columns} />
    </>
  )
}

export default About;
