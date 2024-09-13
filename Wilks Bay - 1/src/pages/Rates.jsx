import React from 'react'

export default function Rates() {
  return (
    <div>
      <img src="rates.PNG" alt="" srcset="" className="w-full mt-"/>
      <br />
      <h2 className="font-bold text-2xl text-center">
        Rates
      </h2>

      <div className=" m-12 border border-white grid   md:items-center w-4/5">
         <h3 className="font-bold text-lg">
          Summer
         </h3>
         <ul className="p-8 space-y-8">
            <li className="text-sm">
              Cottage/ 1 Bedroom Apartment - $327 USD
            </li>
            <li>
              2 Bedroom Apartment - $472 USD
            </li>
            <li>
              3 Bedroom Villa - $700 USD
            </li>
          </ul>
      </div>
      <div className=" m-12 border border-white grid   md:items-center w-4/5">
         <h3 className="font-bold text-lg">
          Winter
         </h3>
         <ul className="p-8 space-y-8">
            <li className="text-sm">
              Cottage/ 1 Bedroom Apartment - $372 USD
            </li>
            <li>
              2 Bedroom Apartment - $563 USD
            </li>
            <li>
              3 Bedroom Villa - $790 USD
            </li>
          </ul>
      </div>
      <div className=" m-12 border border-white grid   md:items-center w-4/5">
         <h3 className="font-bold text-lg">
          Xmas/ New Year
         </h3>
         <ul className="p-8 space-y-8">
            <li className="text-sm">
              Cottage/ 1 Bedroom Apartment - $418 USD
            </li>
            <li>
              2 Bedroom Apartment - $690 USD
            </li>
            <li>
              3 Bedroom Villa - $954 USD
            </li>
          </ul>
      </div>
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

 