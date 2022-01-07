import React from 'react';

const Nav = (props:any) => {
  console.log(props, 'nav11');
  return (
    <div>nav{props.children}</div>
  )
}

export default Nav;
