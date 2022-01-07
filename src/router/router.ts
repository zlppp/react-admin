

// const BasicLayout = lazy(() => import(/* webpackChunkName: 'BasicLayout' */ 'layout/index'));
import { lazy } from 'react';
import Login from '../page/Login';

const Layout = lazy(() => import(/* webpackChunkName: 'Layout' */ '../components/layout'));
const About = lazy(() => import(/* webpackChunkName: 'About' */ '../page/About'));
const Home = lazy(() => import(/* webpackChunkName: 'Home' */ '../page/Home'));
const TicTacToe = lazy(() => import(/* webpackChunkName: 'TicTacToe' */ '../page/TicTacToe'));

const routers = [
  {
    path: '/about',
    name: 'about',
    component: About,
    title: '关于'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    title: '主页'
  },
  {
    path: '/TicTacToe',
    name: 'TicTacToe',
    component: TicTacToe,
    title: '井字棋'
  }
]

export default routers;
