import React from 'react';
import pic2 from '../Images/2.jpg';
import pic3 from '../Images/3.jpg';
import pic4 from '../Images/4.jpg';
import pic5 from '../Images/5.jpg';


function Services(props) {
    return (
        <section className="text-sm " id="services">
        <div className="text-sm w-11/12 py-10 mx-auto">
          <div className="animated font-extrabold text-3xl py-12 sm:w-1/2 self-start">We offer a wide range of
            financial products and services in a transparent manner</div>
  
          <div className="animated flex flex-wrap gap-4 w-full mx-auto">
            <div className="animated body flex flex-col gap-3 bg-gray-100 rounded-md p-2 w-full sm:w-[48%] mx-auto">
              <img src={pic2} alt="" className="w-20"/>
              <span className="text-lg font-bold">Investment Banking</span>
              <p className="text-gray-600 font-medium">
                A deep bench of experts providing best-in-className advisory services across extensive investment banking
                offerings, including Capital Markets and Mergers & Acquisition advisory.
              </p>
              <a href="#" className="clrred font-bold">Learn more</a>
            </div>
            <div className="body flex flex-col gap-3 bg-gray-100 rounded-md p-2 w-full sm:w-[48%] mx-auto">
  
              <img src={pic3} alt="" className="w-20"/>
              <span className="text-lg font-bold">Institutional Brokerage</span>
              <p className="text-gray-600 font-medium">
                Bespoke and high-touch approach to ensuring smooth execution for the placement needs of both domestic and
                international clients across various asset classNamees.</p>
              <a href="#" className="clrred font-bold">Learn more</a>
            </div>
  
            <div className="body flex flex-col gap-3 bg-gray-100 rounded-md p-2 w-full sm:w-[48%] mx-auto">
              <img src={pic4} alt="" className="w-20"/>
              <span className="text-lg font-bold">Retail Investing</span>
              <p className="text-gray-600 font-medium">
                Access the best mobile and desktop trading tools to seamlessly invest in equities on the Pakistan Stock
                Exchange (PSX) and commodities on the Pakistan Mercantile Exchange (PMEX) for individual investors.</p>
              <a href="#" className="clrred font-bold">Learn more</a>
            </div>
            <div className="body flex flex-col gap-3 bg-gray-100 rounded-md p-2 w-full sm:w-[48%] mx-auto">
              <img src={pic5} alt="" className="w-20"/>
              <span className="text-lg font-bold ">Equity Research</span>
              <p className="text-gray-600 font-medium">
                Gain contextual insights into the performance of the stock market against the backdrop of domestic and
                global economic, social and political events, through research published by our all-star think tank.</p>
              <a href="#" className="clrred font-bold">Learn more</a>
            </div>
  
  
  
          </div>
  
        </div>
      </section>
    );
}

export default Services;