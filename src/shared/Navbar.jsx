import React, { useContext } from 'react';
import { InitContext } from '../context/InitProvider';


const Navbar = () => {

	const { toggleNav } = useContext(InitContext);
	const { isNavOpen } = useContext(InitContext);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-full md:block md:w-auto">
        <a href="./" className="flex items-center">
          <img src="./curriculum-vitae.png" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">Curriculum Vitae</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <nav className={`w-full md:block md:w-auto ${isNavOpen ? '' : 'hidden'}`}>
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li>
            <a href="./" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Inicio</a>
          </li>
          {/* <li className="nav-item">
            <a href="#" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
              Dropdown
              <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

            <ul className="nav-sub-item-content py-1 text-sm text-gray-700 z-[1] relative hidden bg-gray-200 rounded-md md:absolute">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a href="/proyectos" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Proyectos</a>
          </li>
          <li>
            <a href="/certificados" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Certificados</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

