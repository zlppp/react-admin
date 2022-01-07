
import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Switch, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import routers from '../router/router';


const { Content, Sider, Footer } = Layout;

const LayoutMain = () => {
  const history = useHistory();
  console.log(localStorage.getItem('token'))
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [item, setItem] = useState({
    path: '',
    component: () => {}
  });
  console.log(history, 'his')

  const toLink = (item:any) => {
    setItem(item);
    history.push(item.path);
    setSelectedKeys([item.name]);
    console.log(item);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={false}>
          <div style={{ height: 50 }} />
          <Menu theme="dark" selectedKeys={selectedKeys} mode="inline">
            {
              routers.map(item => (
                <Menu.Item key={item.name} onClick={() => { toLink(item) }}>{item.title}</Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <LayoutCon>
              <Switch>
                {
                  routers.map(item => <Route path={item.path} component={item.component} />)
                }
              </Switch>
            </LayoutCon>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design + React ©2022 Created by zhangliping</Footer>
        </Layout>
      </Layout>
  )
}

export default LayoutMain;

const LayoutCon = styled.div`
  padding: 24px;
  min-height: 100%;
  background: #fff;
`;