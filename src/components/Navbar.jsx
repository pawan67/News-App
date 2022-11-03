import React, { Component } from "react";
import {
  Link,
  
} from "react-router-dom";
export class Navbar extends Component {
 
  constructor(){
    super();
    this.state = {
      mt:"-mt-80",
      bx:"bx-menu"
    
    }
  }
 
  responsiveMenu=()=>{
    if(this.state.mt==="-mt-80"){
    this.setState({mt:"mt-9"});
    this.setState({bx:"bx-window-close"})
    }
    else{
      this.setState({mt:"-mt-80"});
    this.setState({bx:"bx-menu"})
    }
  }
  render() {
    return (
      <div>
        <nav className="flex p-2 sm:p-3 bg-black text-white shadow-md min-w-full fixed  top-0">
          <label htmlFor="" className="font-semibold text-xl z-30">Newsy</label>
          
          <ul className={`flex lg:ml-8 lg:mt-0 lg:mr-auto flex-col  lg:flex-row lg:relative absolute min-w-full bg-black lg:bg-none  lg:p-0 transition-all -ml-2 sm:-ml-3  ${this.state.mt}`}>
            
            <Link to="/">
              <li  className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>Home</li>
            </Link>
            <Link to="/">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>About</li>
            </Link>
            
            <Link to="/Business">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>Business</li>
            </Link>
            <Link to="/Entertainment">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>Entertainment</li>
            </Link>
            <Link to="/General">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>General</li>
            </Link>
            <Link to="/Health">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>Health</li>
            </Link>
            <Link to="/Science">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>Science</li>
            </Link>
            <Link to="/Sports">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu}>Sports</li>
            </Link>
            <Link to="/Technology">
              <li className="sm:mx-4 m-2 my-1 " onClick={this.responsiveMenu} >Technology</li>
            </Link>
            </ul>
          
          <label className="ml-auto lg:hidden cursor-pointer" onClick={this.responsiveMenu} href="/"><i className={`bx bx-sm ${this.state.bx} ml-auto`}></i></label> 
          </nav>
      </div>
    );
  }
}

export default Navbar;
