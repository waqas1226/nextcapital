import React from 'react';

function Extra(props) {
    return (
        <section className="bg-gray-100 text-sm font-medium">
        {/* <div className="flex flex-wrap justify-center gap-2 w-11/12 mx-auto py-24"> */}
        <div className="grided gap-2 w-11/12 mx-auto py-24">
  
          <div className="animated body flex flex-col gap-4 bg-white rounded-md p-6 ">
          {/* <div className='h-max'> */}
            <h2 className="text-lg font-extrabold">Careers</h2>
            <div className="flex flex-col justify-between gap-4 h-full">
              <p className="text-gray-500">
                Check out open positions in our organization and become a part of Pakistan's leading brokerage & corporate
                advisory firm.
              </p>
              <a href="#" className="clrred font-bold">View Positions</a>
            </div>
          </div>
          <div className="animated body flex flex-col gap-4 bg-white rounded-md p-6 ">
          {/* <div className='h-max'> */}
            <h2 className="text-lg font-extrabold">Download Center</h2>
            <div className="flex flex-col justify-between gap-4 h-full">
            <p className="text-gray-500">
              Download our mobile and desktop trading applications, and start investing now!
            </p>
            <a href="#" className="clrred font-bold">Download Now</a>
          </div>
          </div>
          <div className="animated body flex flex-col gap-4 bg-white rounded-md p-6 ">
          {/* <div className='h-max'> */}
            <h2 className="text-lg font-extrabold">Investor Relations</h2>
            <div className="flex flex-col justify-between gap-4 h-full">
            <p className="text-gray-500">
              Stay up-to-date on the company's latest announcements, financial reports, governance information and other
              fillings.</p>
            <a href="#" className="clrred font-bold">Learn More</a>
          </div>
          </div>
        </div>
      </section>
    );
}

export default Extra;