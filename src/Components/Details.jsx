import React from 'react';
import pic6 from '../Images/6.jpg';

function Details(props) {
    return (
        <section id="details">

        <div className="text-left text-sm sm:text-xs font-bold text-gray-400 flex flex-col sm:flex-row gap-8 w-11/12 mx-auto">
          <img src={pic6} alt="image" className="w-20 h-20 mr-auto"/>
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900">Capabilities</h3>
            <a href="" className="redOnHover">Investment Banking</a>
            <a href="" className="redOnHover">Institutional Brokerage</a>
            <a href="" className="redOnHover">Retail Investing</a>
            <a href="" className="redOnHover">Equity Research</a>
  
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900">Company</h3>
            <a href="" className="redOnHover">About Us</a>
            <a href="" className="redOnHover">Investor</a>
            <a href="" className="redOnHover">Download Center</a>
            <a href="" className="redOnHover">Careers</a>
            <a href="" className="s">Useful Links</a>
  
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900">Resources</h3>
            <a href="" className="redOnHover">FAQ's</a>
            <a href="" className="redOnHover">Privacy Policy</a>
            <a href="" className="redOnHover">Terms & Conditions</a>
            <a href="" className="redOnHover">Code of Conduct</a>
            <a href="" className="redOnHover">WB Policy</a>
            <a href="" className="redOnHover">Sitemap</a>
  
          </div>
        </div>
      </section>
    );
}

export default Details;