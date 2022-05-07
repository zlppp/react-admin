import React from 'react';
import Router from './router';
import moment from 'moment';
import { ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
// import empty from 'assets/images/empty.png';
import './App.css';

moment.locale('zh-cn');
const App = () => {
  const customizeRenderEmpty = () => (
    <div className="empty-table">
      {/* <img className="img" src={empty} alt="" /> */}
      <p className="text">暂无数据</p>
    </div>
  );
  return (
    <ConfigProvider locale={zhCN} renderEmpty={customizeRenderEmpty}>
      <Router />
    </ConfigProvider>
  );
};

export default App;
