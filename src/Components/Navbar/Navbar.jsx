import React, {useState} from 'react'
//icons imported
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from  'react-icons/bs';
import { AiOutlineGlobal } from  'react-icons/ai';
import { CgMenuGridO } from  'react-icons/cg';

//image imported

import Flight from "../../assets/flight.png";
const Navbar = () => {

  const [active ,setActive] = useState('navBarMenu');

  const logicNavBar = () => {
    setActive('navBarMenu showNavBar')
  }
  const removeNavBar = () => {
    setActive('navBarMenu')
  }

  //lets add backgroud color
  const [noBg ,addBg] = useState('navBarTwo');
  
  const addBgColor = () => {
    if(window.scrollY >= 10){
      // console.log('print');
      addBg('navBarTwo navbar_with_bg')
    }else{
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll',addBgColor);

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul/>
        </div>

        <div className='none flex'>
          <li className='flex'> <BsPhoneVibrate/>Support</li>
          <li className='flex'> <AiOutlineGlobal/>Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>


      </div>

      <div className={noBg}>
        
        <div className="logoDiv">
          <img src={Flight} alt="" className='Logo'/>
        </div>
        
        <div className={active}>
           
           <ul className='menu flex'>
            <li onClick={removeNavBar}>Home</li>
            <li onClick={removeNavBar}>About</li>
            <li onClick={removeNavBar}>Offers</li>
            <li onClick={removeNavBar}>Seats</li>
            <li onClick={removeNavBar}>Destination</li>
           </ul>
           
           <button onClick={removeNavBar} className='btn flex btnOne'>
            Contact
            </button>
        </div>

        <button className='btn flex btnTwo'>
            Contact
        </button>

        <div onClick={logicNavBar} className="toggleItem">
          <CgMenuGridO/>
        </div>
      </div>
    </div>
  )
}

export default Navbar