import React from 'react';
import book from '../Images/book.jpg';

function Report(props) {
    return (
        <section id="reports">
        <div className="w-4/5 mx-auto py-14 flex flex-wrap lg:flex-nowrap items-center gap-12 lg:gap-4">
          <img src={book} alt="bookimage" className="animated w-72 sm:w-96"/>
  
          <div className="animated flex flex-col gap-10">
            <h2 className="font-extrabold text-2xl sm:text-3xl text-left min-w-min text-gray-700">Freely access insightful research
              reports from our experienced
              Research Analysts</h2>
            <a href="#" className="bgred text-white font-bold py-3
        px-4 rounded-md mr-2 w-max">View Reports</a>
          </div>
  
        </div>
      </section>
    );
}

export default Report;