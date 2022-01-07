import React from 'react';
import Nav from '../components/nav';

const Home = () => {
  return (
    <div>我是home
       <Nav>
         <div style={{ color: 'red', }}>我是children</div>
         <span>短发短发</span>
       </Nav>
    </div>
  )
};

export default Home;