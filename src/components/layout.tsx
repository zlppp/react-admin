import React, { useState, useEffect } from 'react';
import {
  Outlet, useNavigate, useSearchParams, useLocation
} from 'react-router-dom';
import styled from '@emotion/styled';
import {
  Menu, Avatar, Dropdown, Layout,
} from 'antd';
import menuList from '../router/router';
// import http from 'utils/http';
// import logo from 'assets/images/logo.svg';
// import { MenuType, UserInfoType } from 'types/public';
// import LOGOUT_ADDRESS from 'config/public';
// import Iconfont from 'components/iconfont';

const { SubMenu } = Menu;
const { Sider, Header, Content } = Layout;

const LayoutContainer = () => {
  console.log(menuList, 'menuList');
  const [routerData] = useState(menuList);
  // const [userInfo, setUserInfo] = useState<UserInfoType>({
  //   avatar: '',
  //   name: '',
  // });
  const searchParams = useSearchParams()[0];
  const navigate = useNavigate();
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState({
    name: '',
    path: '',
  });
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { pathname } = location;

  const handleClick = (menu: any) => {
    setCurrentMenu(menu);
    console.log(menu, 'menu');
    navigate(menu.path);
  };

  const getMenuInfo = () => {
    const openKeysList = openKeys;
    const menuPath = pathname.replace('/', '');
    console.log(menuPath, 'menuPath');
    setCurrentMenu({
      name: menuPath,
      path: '',
    })
    menuList.forEach((item) => {
      if (item.children && item.children.length) {
        item.children.forEach((child) => {
          if (child.path === menuPath) {
            // setCurrentMenu(child);
            // openKeysList.push(item.id);
            setOpenKeys(openKeysList);
          }
        });
      }
    });
  };

  const loginOut = () => {
    localStorage.removeItem('token');
    window.close();
    // window.open(LOGOUT_ADDRESS);
  };

  const menu = (
    <Menu style={{ textAlign: 'center' }}>
      <Menu.Item>
        <div onClick={() => { loginOut(); }}>退出</div>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const token = searchParams.get('token') || localStorage.getItem('token') || '';
    localStorage.setItem('token', token);
    if (token) {
      getMenuInfo();
    }
    if (searchParams.get('token')) navigate(pathname);
  }, []);

  return (
    <Layout>
      <Sider>
        <Logo className="logo">React Admin</Logo>
        <Menu
          mode="inline"
          selectedKeys={[currentMenu.name]}
          style={{ height: "100vh" }}
          // openKeys={openKeys}
          inlineIndent={16}
          inlineCollapsed={false}
          theme="dark"
        >
          {
            routerData.map((item) => (
              <>
                {
                  item.children ? (
                    <SubMenu
                      className="menu-parent"
                      key={item.name}
                      title={(
                        <span>
                          {/* <Iconfont name={item.icon} /> */}
                          {item.name}
                        </span>
                      )}
                    >
                      {
                        item.children.map((sub) => (
                          <Menu.Item className="sub-menu" key={sub.name} onClick={() => handleClick(sub)}>{sub.name}</Menu.Item>
                        ))
                      }
                    </SubMenu>
                  ) : <Menu.Item key={item.name} onClick={() => handleClick(item)}>{item.name}</Menu.Item>
                }
              </>
            ))
          }
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;

const Main = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
`;

const Logo = styled.span`
  font-size: 20px;
  color: #fff;
  display: block;
  text-align: center;
  margin: 10px 0;
  letter-spacing: 2px;
  font-weight: bold;
`;