import React from 'react';
import man from '../Images/man.jpg';

function ClientCare(props) {
    return (
        <section id="ClientsCare" className="mt-12">
        <div className="bg-cover bg-center h-max py-16 w-full" style={{backgroundImage:`url(${man})`}}>
          <div className="px-2 py-14 flex flex-col lg:w-3/5 lg:ml-5 lg:mr-auto gap-4 w-full mx-auto">
            <h2 className="animated text-2xl sm:text-3xl text-white font-extrabold text-left">We help our clients grow their wealth by
              providing best-in-className investing services
            </h2>
  
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#" className="animated bgred text-white font-bold py-3
        px-4 rounded-md mr-2 w-max">Open Brokerage Account</a>
  
            </div>
          </div>
        </div>
      </section>  
    );
}

export default ClientCare;