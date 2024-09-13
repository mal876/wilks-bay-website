import React from 'react'

export default function Learn() {
  return (
    <div>
      <img src="learn.PNG" alt=""  className="w-full mt-1"/>
      <br />

      <center>
        <div className='border border-black w-3/5'>
          <h2 className='font-bold text-4xl'>
            Welcome
          </h2>
          <br />
          <p className='text-sm'>
          Wilks Bay is a beautiful estate hidden away in a picturesque, secluded bay in San San <br />
          Port Antonio between San San Beach and Frenchman's Cove, with 100 yards of private white 
          sand beach.
          </p>
          <br />
          <p className='text-sm'>
          At Wilks the lawns and beautiful gardens of bananas, breadfruit, avocado and other tropical <br />
          fruit trees and flowering shrubs slope gently down to the ocean. The estate has a large <br />
          free-form pool and sundeck next to its own private beach with a jetty leading into the ocean <br />
          and coral reef - perfect for swimming, snorkeling and scuba diving.
          </p>
          <br />
          <p className='text-sm'> 
          Your attentive, yet discrete staff will tend to your every need, or leave you to be alone, <br />
          as you wish. They can tell you what there is to do in the area and will help you arrange it. <br />
          They can accompany you, for example, into the local market to buy fruits or craftwork.
          </p>
        </div>
      </center>
      <br />
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

 