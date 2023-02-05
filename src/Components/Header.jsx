import { PlayCircleOutlineTwoTone } from '@mui/icons-material';
import React from 'react';

function Header(props) {
    return (
        <header id="welcome" className="w-full bg-black">
        <div className="flex flex-col justify-center gap-12 font-bold text-white w-2/4 h-[150vh] ml-12">
          <span id="wel" className="animated text-5xl">
            Welcome to Pakistan’s leading brokerage & corporate advisory firm
          </span>
          <div className="flex flex-col gap-4  sm:flex-row ">
  
            <button className="animated min-w-max rounded-lg bg-violet-700 text-white p-3">Open IPS Account</button>
            <button className="animated min-w-max rounded-lg bgred text-white p-3">Open Brokerage Account</button>
            <button className="animated min-w-max rounded-lg bgred text-white p-3">Watch Video</button>
          </div>
          <button className="absolute right-4 -bottom-60"><PlayCircleOutlineTwoTone/></button>
  
        </div>
      </header>
    );
}

export default Header;