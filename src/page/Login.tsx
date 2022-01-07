import React from 'react';
import {
  Form, Input, Button, message,
} from 'antd';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useRequest } from 'ahooks';
import '../mock/login';
import { loginServe } from '../mock/login';

interface submitData {
  username:string;
  password:string;
}

function changeUsername(username: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

const Login = () => {
  const [form] = Form.useForm();
  const { loading, runAsync } = useRequest(loginServe);

  const onClick = async () => {
    let value = await form.validateFields()
    try {
      await runAsync(value);
      // 跳转到home页
    } catch (err:any) {
      message.error(err.errorMsg);
    }
  };

  return (
    <Main>
      <Content>
        <Form
          form={form}
          name="login"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
              maxLength={20}
            />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
          >
            <div>
              <Input
                className="code-input"
                prefix={<SafetyOutlined className="site-form-item-icon" />}
                maxLength={4}
                placeholder="验证码"
              />
              <span className="code">25fv</span>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={onClick} loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Main>
  )
};

export default Login;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 400px;
  padding: 40px;
  margin: 0 auto;
  background: rgba(0,0,0,.1);
  border-radius: 4px;
  box-shadow: 0 0 20px #ddd;
  .login-form-button {
    width: 100%;
  }
  .code-input {
    width: 200px;
  }
  .code {
    display: inline-block;
    width: 100px;
    height: 38px;
    border: 1px solid #fff;
    vertical-align: middle;
    line-height: 38px;
    text-align: center;
  }
`;