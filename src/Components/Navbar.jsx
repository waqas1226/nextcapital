import { MenuOutlined, Search } from '@mui/icons-material';
import React, { useState } from 'react';
import icon from '../Images/icon.jpg';


function NavBar(props) {
  const [visible, setVisible] = useState(false);
  // i.classList.add("show");


  return (
    <nav className="sticky top-0 py-3 sm:py-1 z-10 bg-white shadow">
      <div className="nav flex items-center justify-between relative text-slate-500 text-sm sm:text-xs font-bold">
        <a href="#" className="mr-4"><img src={icon} alt="icon" className="max-w-[160px] mr-auto" /></a>
        <span style={{ backgroundColor: visible ? '#e92a5e' : 'white', color: visible ? 'white' : 'black' }} className="menu rounded-lg p-1 mr-3 ml-auto w-8 grid place-items-center cursor-pointer lg:hidden">
          <MenuOutlined onClick={() => setVisible(!visible)} className="redOnHover" />
          </span>


        <div className={`bg-white navitemsForlg flex-col gap-3 items-center justify-between my-12 py-2 sm:my-2 absolute w-full top-3 sm:top-11 
        ${visible?'navitemsSm':"navitemshidden"}`}>
        {/* // navitems bg-white flex flex-col gap-3 lg:flex-row items-center justify-between 
          //  my-12 py-2 sm:my-2 lg:static absolute w-full top-3 sm:top-11"*/}
          <a href="#" className="redOnHover pt-10 sm:pt-0">Home</a> 
          <a href="#" className="redOnHover py-1 pt-4 lg:pt-0">About</a>
          <a href="#" className="redOnHover py-1">Capabilities</a>
          <a href="#" className="redOnHover py-1">Research</a>
          <a href="#" className="redOnHover py-1">Investors</a>
          <a href="#" className="redOnHover py-1">Contact</a>
          <div className="flex items-center gap-3 flex-1 w-11/12 flex-col lg:flex-row">
            <button className=" w-full clrred borderRed px-1 py-2 rounded-lg shadowred">Login</button>
            <button className="w-full min-w-[100px] rounded-lg bgblue text-white py-2 px-1 shadowblue">Open IPS Account</button>
            <button className="w-full min-w-[140px] rounded-lg bgred text-white py-2 px-1 shadowred">Open Brokerage
              Account</button>
          </div><Search className='cursor-pointer' />
        </div>
      </div>

    </nav>

  );
}

export default NavBar;