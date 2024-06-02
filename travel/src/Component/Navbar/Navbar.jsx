import "./Navbar.css"
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";
export const Navbar = () => {
  const [navbar,setNavbar]=useState('navbar');
  const toggleNavbar=()=>{
    navbar==='navbar'?setNavbar("navbar active"):setNavbar("navbar")
  }
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logDiv">
          <a href="#" className="logo">
          <h1><MdTravelExplore className="icon"/>Travel</h1>
          </a>
        </div>

        <div className={navbar}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className="btn">
              <a href="#">
                BOOK NOW
              </a>
           </button>
          </ul>
          <div className="closeNavbar">
            <IoMdCloseCircle className="icon" onClick={toggleNavbar}/>
          </div>
        </div>

        <div className="toggleNavbar">
          <PiDotsNineBold className="icon" onClick={toggleNavbar}/>
        </div>
      </header>

    </section>
  )
}
