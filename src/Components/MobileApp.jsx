import React from 'react';
import mobile from '../Images/mobile.jpg';


function MobileApp(props) {
    return (
        <section className="my-12">
        <div className="bg-cover bg-center h-[120vh] max-w-full" style={{backgroundImage:`url(${mobile})`}}>
          <div className="px-4 py-28 flex flex-col items-center lg:w-3/5 lg:ml-5 lg:mr-auto gap-7 w-4/5 mx-auto">
            <h2 className="animated text-3xl text-white font-extrabold text-left">Jump start your investing game on our Mobile
              Trading App
            </h2>
            <p className="animated text-white text-sm font-normal text-left">Investing is one of the best ways to grow your savings
              over the long term. We’re on a mission to get everyone investing by building a platform that helps customers
              achieve better long-term financial outcomes.</p>
            <div className="animated mt-4 flex flex-wrap gap-2">
              <a href="#" className="bgred text-white font-bold py-2
        px-4 rounded-md mr-2 w-max">Download for Android</a>
              <a href="#" className="bgred text-white font-bold py-2
        px-4 rounded-md mr-2 w-max">Download for iOS</a>
              <p className="text-white text-xs font-medium mt-4">To download the desktop terminal for Windows or
                MacOS, please visit our <a href="#" className="text-yellow-500">download center.</a> </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default MobileApp;