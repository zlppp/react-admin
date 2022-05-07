

// const BasicLayout = lazy(() => import(/* webpackChunkName: 'BasicLayout' */ 'layout/index'));
import { lazy } from 'react';
import Login from '../page/Login';

const Layout = lazy(() => import(/* webpackChunkName: 'Layout' */ '../components/layout'));
const About = lazy(() => import(/* webpackChunkName: 'About' */ '../page/About'));
const Home = lazy(() => import(/* webpackChunkName: 'Home' */ '../page/Home'));
const TicTacToe = lazy(() => import(/* webpackChunkName: 'TicTacToe' */ '../page/TicTacToe'));

const routers = [
  // {
  //   path: '',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/home',
  //       component: Home,
  //       name: '主页',
  //     },
  //     {
  //       path: '/',
  //       component: Layout,
  //       name: '表格',
  //       children: [
  //         {
  //           path: '/about',
  //           name: 'about',
  //           menuIds: ['materialTesting', 'materialTestingHot'],
  //           component: About,
  //           title: '',
  //         },
  //         {
  //           path: '/TicTacToe',
  //           name: 'TicTacToe',
  //           component: TicTacToe,
  //           title: '井字棋'
  //         }
  //       ]
  //     },
  //   ]
  // },
  {
    path: '/home',
    component: Home,
    name: '主页',
  },
  {
    path: '/',
    component: Layout,
    name: '表格',
    children: [
      {
        path: '/about',
        name: 'about',
        menuIds: ['materialTesting', 'materialTestingHot'],
        component: About,
        title: '',
      },
      {
        path: '/TicTacToe',
        name: 'TicTacToe',
        component: TicTacToe,
        title: '井字棋'
      }
    ]
  },
]

export default routers;
