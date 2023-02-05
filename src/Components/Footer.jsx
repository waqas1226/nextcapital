import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import secp from '../Images/secp.jpg';
import psx from '../Images/psx.jpg';
import cdc from '../Images/cdc.jpg';
import ncc from '../Images/ncc.jpg';
import farm from '../Images/farm.jpg';


function Footer(props) {
    return (
<footer className="my-20">
<div className="w-11/12 mx-auto flex flex-col gap-8 text-sm">
  <div className="flex flex-col gap-2">
    <h3 className="font-bold">Disclaimer</h3>
    <p className=" text-xs text-gray-400">“In case your complaint has not been properly redressed by us, you may lodge
      your complaint with
      Securities and Exchange Commission of Pakistan (the “SECP”). However, please note that SECP will entertain
      only those complaints which were at first directly requested to be redressed by the Company and the company
      has failed to redress the same. Further, the complaints that are not relevant to SECP’s regulatory
      domain/competence shall not be entertained.”</p>
    <h3 className="font-bold bg-slate-500 w-max py-1 my-5">NTN Number: 3536119</h3>
  </div>

  <div className="flex flex-col sm:flex-row gap-4 items-center">
    <div className="flex items-center">

      <a href="#" className=""><img src={secp} alt="icon" className="max-w-[50px]"/></a>
      <a href="#" className=""><img src={psx} alt="icon"/></a>
      <a href="#" className=""><img src={cdc} alt="icon"/></a>
      <a href="#" className=""><img src={ncc} alt="icon"/></a>
      <a href="#" className=""><img src={farm} alt="icon"/></a>
    </div>
    <div className="flex gap-6 bg-gray-200  rounded-lg p-3 ml-auto">
      <div className="flex w-20 flex-col">
        <span className="text-xs text-gray-400">Credit Rating</span>
        <span className="clrred font-bold text-sm">A-/A-2</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">secpagement Rating</span>
        <span className="clrred font-bold text-sm">BMR2++</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">Broker Fiduciary Rating</span>
        <span className="clrred font-bold text-sm">BFR2</span>
      </div>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center justify-between">
    <h2 className=" text-lg font-bold">© 2022 Next Capital Limited. All Rights Reserved.</h2>
    <div className="flex gap-2">
      <Facebook/>
      <Twitter/>
      <Instagram/>
      <LinkedIn/>

      {/* className="w-10"/> */}
    </div>
  </div>
</div>
</footer>
  );
}

export default Footer;