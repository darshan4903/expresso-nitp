/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar px-4 py-4 bg-black text-zinc-100 flex justify-between items-center w-screen">
        
        <img src="\logo\logoexpresso.svg" alt="img" className="w-11 mx-4" />
        <div className="nav">
        <div className="hamburger inline-block p-4 md:hidden ">
          <div className="line h-1 w-7 bg-black my-1"></div>
          <div className="line h-1 w-7 bg-black my-1"></div>
          <div className="line h-1 w-7 bg-black my-1"></div>
          
            </div>

          <ul className="flex justify-end  " >
            <li className="mx-4 "><a href="#">HOME</a></li>
            <li className="mx-4 "><a href="#">EVENTS</a></li>
            <li className="mx-4 "><a href="#">GALLERY</a></li>
            <li className="mx-4 "><a href="#">ART</a></li>
            <li className="mx-4 "><a href="#">LITRATURE</a></li>
            <li className="mx-4 "><a href="#">TEAM</a></li>
            <li className="mx-4 "><a href="#">ABOUT US</a></li>
           
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
