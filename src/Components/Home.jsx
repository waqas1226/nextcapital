import React, { useState } from 'react';
import Header from './Header';
import ClientCare from './ClientCare';
import Contact from './Contact';
import Details from './Details';
import Extra from './Extra';
import MobileApp from './MobileApp';
import NavBar from './Navbar';
import Report from './Report';
import Services from './Services';
import Footer from './Footer';
import { ArrowDropUp, ArrowRight, ArrowUpward } from '@mui/icons-material';


function Home(props) {
  const [visible, setVisible] = useState(false);

  return (
  <div id="main" className="font-sans text-gray-700">
<NavBar/>
<Header/>
<Services/>
<MobileApp/>
<Report/>
<ClientCare/>
<Extra/>
<Contact/>
<Details/>
<Footer/>

    <div className="fixed bottom-0 left-12 w-20 bg-white text-[12px] font-bold">
    <a href="#" style={{ display: visible ? 'block' : 'none' }} className=" border border-gray-200 border-solid hover:text-blue-600 p-1 pl-2">اردو</a>
    <div className="border flex border-gray-200 border-solid block p-1 ">
      <a href="#" className=" hover:text-blue-600 p-1">English</a>
      <span className="ml-2" onClick={() => setVisible(!visible)}>{!visible?<ArrowRight/>:<ArrowDropUp/>}</span>
    </div>
  </div>
</div>
  );
}

export default Home;

