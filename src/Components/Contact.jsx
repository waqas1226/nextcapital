import React from 'react';

function Contact(props) {
    return (
        <section id="contact" className="w-full text-gray-700">
        <div className="flex flex-col w-4/5 sm:w-11/12 lg:flex-row py-16 pb-24 gap-6 mx-auto">
          <div className="py-2 flex flex-col gap-8 my-6">
            <h1 className="text-2xl sm:text-4xl font-extrabold">For further inquiries or assistance,
              please contact.</h1>
            <a href="#" className="bgred text-white font-bold py-3
        px-4 rounded-md mr-2 w-max">Contact</a>
          </div>
          <div className="flex flex-col text-left sm:text-sm font-extrabold sm:flex-row gap-6 lg:flex-col my-10 ">
            <div className="flex flex-col max-w-sm">
              <h3 className="clrred">Karachi</h3>
              <h3 className="s">2nd Floor Imperial Court Building,
                Dr. Ziauddin Ahmed Road,
                Karachi, Pakistan</h3>
              <h3 className="mt-4">Tel: +92 21 111 639 825</h3>
              <h3 className="s">Fax: +92 21 3563 2321</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="clrred">Lahore</h3>
              <h3 className="s">63-A, Agora Eden City
                DHA Phase VIII,
                Lahore, Pakistan</h3>
              <h3 className="mt-4">Tel: +92 42 3713 5843-8</h3>
              <h3 className="s">Fax: +92 42 3713 5840</h3>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;