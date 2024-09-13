import React from 'react'

function Things() {
  return (
    <div>
      <img src="activities.PNG" alt="" srcset="" className="w-full mt-"/>

      <br />

      <div className=" m-12 border border-white grid   md:items-center w-4/5 ">
          <h3 className="font-bold text-lg">
            On-site Activities
          </h3>
          <ul className=' p-1 list-inside m-4 gap-9 flex flex-wrap '>
            <li>
              <img src="snorkle.PNG" alt="" srcset="" className='border border-black p-5'/>
              <p className='text-center font-medium'>Snorkling</p>
            </li>
            <li>
              <img src="paddle.PNG" alt="" srcset="" className='border border-black p-5'/>
              <p className='text-center font-medium'>Paddle Boarding</p>
            </li>
            <li>
              <img src="kayak.PNG" alt="" srcset="" className='border border-black p-5'/>
              <p className='text-center font-medium'>Kayaking</p>
            </li>
          </ul>
      </div>
      <hr />
      <div className=" m-12 border border-white grid   md:items-center w-4/5 ">
          <h3 className="font-bold text-lg">
            Off-site Activities
          </h3>
          <ul className=' p-1 list-inside m-4 gap-9 flex flex-wrap '>
            <li>
              <img src="blue.PNG" alt="" srcset="" className='border border-black p-5'/>
              <p className='text-center font-medium'>Blue Lagoon <br /> 20 minute walk from propery.</p>
            </li>
            <li>
              <img src="cove.PNG" alt="" srcset="" className='border border-black p-5'/>
              <p className='text-center font-medium'>Frenchmans Cove <br /> 9 minute walk from property.</p>
            </li>
            <li>
              <img src="beach.PNG" alt="" srcset="" className='border border-black p-5'/>
              <p className='text-center font-medium'>San San Beach <br /> 5 minute walk from property.</p>
            </li>
            <li>
              <img src="lighthouse.PNG" alt="" srcset="" className='border border-black p-5'/>
              <p className='text-center font-medium'>Folly Point Lighthouse <br /> 9 minute drive from property.</p>
            </li>
          </ul>
      </div>
      <p className='text-center font-bold'>
        For any additional information please feel free to ask
      </p>
      <br /><br />

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

export default Things