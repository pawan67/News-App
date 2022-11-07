import React from "react";
import {
  Link,
} from "react-router-dom";
import { useState } from "react";

function Navbar(){
 const [Mt, setMt ] = useState("-mt-80")
 const [Icon, setIcon] = useState("bx-menu")
 function responsiveMenu(){
  if(Mt==="-mt-80"){
    setMt("mt-9")
    setIcon("bx-window-close")
  }
  else{
    setMt("-mt-80")
    setIcon("bx-menu")
  }
  }
    return (
      <div>
        <nav className="flex p-3 sm:p-3 bg-black text-white shadow-md min-w-full fixed  top-0 ">
          <label htmlFor="" className="font-semibold text-xl z-30">Newsy</label>
          
          <ul className={`flex lg:ml-8 lg:mt-0 lg:mr-auto flex-col p-1 lg:flex-row lg:relative absolute min-w-full bg-black lg:bg-none  lg:p-0 transition-all -ml-3 sm:-ml-3  ${Mt}`}>
            
            <Link to="/">
              <li  className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu}>Home</li>
            </Link> 
            <Link to="/Business">
              <li className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu}>Business</li>
            </Link>
            <Link to="/Entertainment">
              <li className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu}>Entertainment</li>
            </Link>
            <Link to="/General">
              <li className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu}>General</li>
            </Link>
            <Link to="/Health">
              <li className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu}>Health</li>
            </Link>
            <Link to="/Science">
              <li className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu}>Science</li>
            </Link>
            <Link to="/Sports">
              <li className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu}>Sports</li>
            </Link>
            <Link to="/Technology">
              <li className="sm:mx-4 m-2 my-1 " onClick={responsiveMenu} >Technology</li>
            </Link>
            </ul>
          
          <label className="ml-auto lg:hidden cursor-pointer" onClick={responsiveMenu} href="/"><i className={`bx bx-sm ${Icon} ml-auto`}></i></label> 
          </nav>
      </div>
    );
  
}

export default Navbar;
