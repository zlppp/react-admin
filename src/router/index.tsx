import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { routes } from '../untils/reactUtil';
import routers from './router';

const baseName = process.env.PUBLIC_URL || '';
const Router = () => (
  <BrowserRouter basename={baseName}>
    <Routes>
      {routes(routers)}
    </Routes>
  </BrowserRouter>
);

export default Router;
