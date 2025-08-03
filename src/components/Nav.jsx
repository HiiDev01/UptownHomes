import React from 'react'
import '../components/Nav.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import Logo from './Logo';

const Nav = () => {
  const navItem = [
    {name: "houses", path: "/property/house"},
    {name: "lands", path: "/property/Land"}
  ]
  return (
    <div className='nav'>
      <Logo/>
      <div className='navCon'>
        <div className='navLinkCon'>
          {navItem.map((item, index)=>(
            <a href={item.path} key={index}>
              {item.name}
            </a>
          ))}
        </div>
        <div className='authCon'>
          <a href="/">
            sign up
          </a>
  
          <a href="/signin">
            sign in
          </a>
  
          <a href="/add-property">
            <IoIosAddCircleOutline size={20}/>
            submit property
          </a>
  
        </div>
      </div>
    </div>
  )
}

export default Nav 
