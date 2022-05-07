import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Spin } from 'antd';
const Layout = lazy(() => import(/* webpackChunkName: 'Layout' */ '../components/layout'));

/**
 * 根据路由配置生成相应路由
 * @param {array} routeConfig 路由配置
 * @param {string} parentPath 父级路由
 */
interface RouteType {
  path: string;
  component: React.FC | React.ComponentClass;
  name?: string;
  exact?: string;
  children?: RouteType[];
}
export const routes = (routeConfig: RouteType[], parentPath = '') => {
  if (!routeConfig || routeConfig.length === 0) return null;
  console.log(routeConfig, 'routeConfig');
  return routeConfig.map((route: any) => (
    <Route
      path={route.path}
      key={parentPath + route.path}
      element={(
        <Suspense
          fallback={
            <div className="x-loading-center"><Spin delay={10000} /></div>
          }
        >
          {/* { || <Layout />} */}
          <route.component />
        </Suspense>
      )}
    >
      {route.children && routes(route.children)}
    </Route>
  ));
};

export const other = () => { };
