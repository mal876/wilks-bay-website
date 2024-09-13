import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"

import { useState } from "react"

import Home from './pages/Home'
import Accommodations from './pages/Accomodations'
import Things from './pages/Things'
import Contact from './pages/Contact'
import Learn from "./pages/Learn"
import Rates from "./pages/Rates"

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
          <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-lg md:h-full md:w-full">
            <NavLink to="/" className="w-52 hover:scale-105 transition-all text-3xl font-bold">
              Wilk's Bay <br />
              <span className="text-lg text-center ml-10">
                Resort
              </span>
            </NavLink>

            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
              <li className="p-3 hover:underline hover:bg-transparent hover:border hover:border-black rounded-md transition-all cursor-pointer">
              <NavLink to="/">
                 Home
              </NavLink>
              </li>
              <li className="p-3 hover:underline hover:bg-transparent hover:border hover:border-black rounded-md transition-all cursor-pointer">
              <NavLink to="/accommodations">
                 Accommodations
              </NavLink>
              </li>
              <li className="p-3 hover:underline hover:bg-transparent hover:border hover:border-black rounded-md transition-all cursor-pointer" >
              <NavLink to="/things-to-do">
                 Things To Do
              </NavLink>
              </li>
              <li className="p-3 hover:underline hover:bg-transparent hover:border hover:border-black rounded-md transition-all cursor-pointer">
              <NavLink to="/contact">
                 Contact Us
              </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <div className="relative hidden md:flex items-center justify-center gap-3">
                  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    <NavLink to="/rates">
                      Rates
                    </NavLink>
                  </button>
                </div>
              </li>
            </ul>

            <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

            <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform
              ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>

                <li className="list-none w-full text-center p-4 hover:underline transition-all cursor-pointer">
                <NavLink to="/">
                 Home
                </NavLink>
                </li>
                <li className="list-none w-full text-center p-4 hover:underline transition-all cursor-pointer">
                <NavLink to="/accommodations">
                 Accommodations
                </NavLink>
                </li>
                <li className="list-none w-full text-center p-4 hover:underline transition-all cursor-pointer">
                <NavLink to="/things-to-do">
                 Things To Do
                </NavLink>
                </li>
                <li className="list-none w-full text-center p-4 hover:underline transition-all cursor-pointer">
                <NavLink to="/contact">
                 Contact Us
                </NavLink>
                </li>
                <li className="list-none">
                    <button classn="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      <NavLink to="/rates">
                      Rates
                      </NavLink>
                    </button>
                </li>
                <br />
            </div>
          </header>
          <main>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="accommodations" element={<Accommodations />} />
              <Route path="things-to-do" element={<Things />} />
              <Route path="contact" element={<Contact />} />
              <Route path="learn" element={<Learn />} />
              <Route path="rates" element={<Rates />} />
            </Routes>
          </main>
    </BrowserRouter>
     

  )
}

export default App
