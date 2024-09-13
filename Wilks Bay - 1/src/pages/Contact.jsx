import React from 'react'

function Contact() {
  return (
    <div>
      <div>
      <iframe className="w-full h-96 mt-" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15162.985764224373!2d-76.3977326!3d18.1755908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ec4d24d4384dba3%3A0x336d434417a721d4!2sWilks%20Bay!5e0!3m2!1sen!2sjm!4v1725651928893!5m2!1sen!2sjm">
      </iframe>
    </div>
    <br />
    <div>
      <h2 className="font-bold text-xl p-4">How To Contact Us</h2>
      <ul className="p-7 space-y-9">
        <li className="">
          Address: Wilk's Bay, Port Antonio.
        </li>
        <li className="">
          Telephone: 1 876-471-9622 (US and Canada).
        </li>
        <li className="">
          Email: Reservations@WilksBay.com
        </li>
      </ul>
    </div>
    <center>
      <div className="border border-black w-4/5">
        <p className="text-sm">
        Guests can arrive at either Kingston or Montego Bay Airports. The journey time from Kingston 
        is 2 1/2 hours and Montego Bay is 3 1/2 hours.
        </p>
        <br />
        <p className="text-sm">
        We can arrange for one of our drivers to meet you at the airport and drive you directly to Wilk's Bay.
        All cars are air conditioned. <br /> The cost of airport transfer is not included in the nightly rate.
        </p>
        <br />
        <p className="text-sm">
        It is possible to rent a car and drive yourself to Wilk's Bay, but we would only recommend this if you 
        are familiar with driving in Jamaica.
        </p>
      </div>
    </center>
    <br /><br /><br />
    <footer className="bg-stone-50 shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Wilk's Bay</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/learn" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/accommodations" className="hover:underline me-4 md:me-6">Rooms</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-black dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Wilk's Bay</a>. All Rights Reserved.</span>
                <br />
                <span className="block text-sm text-base text-black dark:text-gray-400">Website developed by Malik Dekid</span>
            </div>
        </footer>

    </div>
  )
}

export default Contact