import React from 'react'

export default function Accommodations() {
  return (
    <div className='accommodations'>
      <img src="rooms.PNG" alt=""  className="w-full mt-1"/>

      <div className="rounded-2xl m-12 border border-black grid gap-2 md:grid-cols-2 md:items-center md:text-left sm:max-xl-p-9 w-4/5">
        <div className="flex flex-col justify-between p-4 leading-normal" >
          <img src="838553435.webp" alt="" className="p-2 rounded-2xl w-2/3"/>
          <div className="flex flex-col justify-between p-4 leading-normal">
          <h2 className="font-bold text-2xl p-6">
            Apartments
          </h2>
          <h5 className="p-6">
            1 to 2 Bedrooms
          </h5>
          <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-black rounded p-6">
            Max capacity: 2
          </button>
        </div>
          <h4 className="font-bold p-6 text-lg">
            Features
          </h4>
          <ul className="p-1 list-inside m-4 gap-9 flex flex-wrap">
            <li>
              Air Condition
            </li>
            <li>
              Balconey
            </li>
            <li>
              Kitchenette
            </li>
            <li>
              Room Service
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="rounded-2xl m-12 border border-black grid gap-2 md:grid-cols-2 md:items-center md:text-left sm:max-xl-p-9 w-4/5">
        <div className="flex flex-col justify-between p-4 leading-normal" >
          <img src="rooms3.jpg" alt="" className="p-2 rounded-2xl w-2/3"/>
          <div className="flex flex-col justify-between p-4 leading-normal">
          <h2 className="font-bold text-2xl p-6">
            Villa
          </h2>
          <h5 className="p-6">
            3 Bedrooms
          </h5>
          <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-black rounded p-6">
            Max capacity: 
          </button>
        </div>
          <h4 className="font-bold p-6 text-lg">
            Features
          </h4>
          <ul className="p-1 list-inside m-4 gap-9 flex flex-wrap">
            <li>
              Air Condition
            </li>
            <li>
              Balconey
            </li>
            <li>
              Kitchenette
            </li>
            <li>
              En Suite
            </li>
            <li>
              Queen Bed
            </li>
            <li>
              Internet Access
            </li>
            <li>
              Room Service
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="rounded-2xl m-12 border border-black grid gap-2 md:grid-cols-2 md:items-center md:text-left sm:max-xl-p-9 w-4/5">
        <div className="flex flex-col justify-between p-4 leading-normal" >
          <img src="cottage.jpg" alt="" className="p-2 rounded-2xl w-2/3"/>
          <div className="flex flex-col justify-between p-4 leading-normal">
          <h2 className="font-bold text-2xl p-6">
            Cottage
          </h2>
          <h5 className="p-6">
            1 Bedroom
          </h5>
          <button className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-black rounded p-6">
            Max capacity: 2
          </button>
        </div>
          <h4 className="font-bold p-6 text-lg">
            Features
          </h4>
          <ul className="p-1 list-inside m-4 gap-9 flex flex-wrap">
            <li>
              Air Condition
            </li>
            <li>
              En Suite
            </li>
            <li>
              Queen Bed
            </li>
            <li>
              Internet Access
            </li>
            <li>
              Room Service
            </li>
          </ul>
        </div>
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