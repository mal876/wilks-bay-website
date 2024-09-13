import React from "react"

export default function Home() {
    return (
      <div className="home">
        <img src="wilks1.jpg" alt="" srcset="" className=" w-full"/> 
        <div className="w-full h-6 bg-neutral-100" ></div>
        <br /><br /><br />

       <center> <div className=" border border-white grid gap-2 md:grid-cols-2 md:items-center md:text-left sm:max-xl-p-9" >
           <center> <img className=" p-4   md:h-96 md:w-96 border border-black" src="wilks5.jpg" alt="" /></center>
            <center><div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center ">Welcome to Wilk's Bay</h5> <br />
                <p className="mb-3 p-5 font-normal text-gray-700 dark:text-gray-400 text-center text-sm "> 
                  Wilks Bay is a beautiful estate
                   hidden away in a picturesque, 
                   secluded bay in San San Port 
                   Antonio between San San Beach 
                   and Frenchman's Cove, with 100
                    yards of private white sand 
                    beach.  
                </p> <br />
                <center><button className="w-36 bg-white border border-gray-400 hover:bg-gray-100 py-2 px-4 text-gray-800 font-bold items-center  rounded shadow">
                <span><a href="/learn">Learn More</a></span>
                </button></center>
            </div></center>
        </div></center>
        <br />

        <hr />

        <center><div className="m-12 border border-white grid   md:items-center w-4/5 ">
          <h2 className="mb-2 text-4xl font-medium text-center ">
            Amenities
          </h2>

          <br />

          <ul className="p-1 list-inside m-4 gap-9 flex flex-wrap" >
            <li>
              Outdoor Pool
            </li>
            <li>
              Free Parking
            </li>
            <li>
             Free High Speed Internet
            </li>
            <li>
              Laundry Service
            </li>
            <li>
              Beachfront
            </li>
            <li>
              Child Friendly
            </li>
            <li>
              Outdoor Dining
            </li>
            <li>
              Room Service
            </li>
            <li>
              Air Conditioning
            </li>
          </ul>
        </div></center>
        
        
        
         <hr />

         <br /><br />

         <div>
      <h2 className="mb-2 text-4xl font-medium text-center" >How To Find Us</h2>
      <br />
      <iframe className="w-full h-96 p-4" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15162.985764224373!2d-76.3977326!3d18.1755908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ec4d24d4384dba3%3A0x336d434417a721d4!2sWilks%20Bay!5e0!3m2!1sen!2sjm!4v1725651928893!5m2!1sen!2sjm">
      </iframe>

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