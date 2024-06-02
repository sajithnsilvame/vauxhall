import { useState } from 'react'
import logo from '../assets/vauxhall-logopng.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <nav className="bg-gray-800">
    //   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex items-center justify-between h-16">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           {!isOpen ? (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h16m-7 6h7"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //       <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    //         <div className="flex-shrink-0">
    //           <img className="h-8 w-auto" src={logo} alt="Vauxhall Logo" />
    //         </div>
    //         <div className="hidden sm:block sm:ml-6">
    //           <div className="flex space-x-4">
    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Cars
    //             </a>
    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Vans
    //             </a>
    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Electric
    //             </a>
    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Offers
    //             </a>
    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Owners
    //             </a>
    //             <a
    //               href="#"
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Business
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
    //     id="mobile-menu"
    //   >
    //     <div className="px-2 pt-2 pb-3 space-y-1">
    //       <a
    //         href="#"
    //         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Cars
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Vans
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Electric
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Offers
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Owners
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Business
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    // <nav className="bg-white shadow">
    //   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex items-center justify-between h-16">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           {!isOpen ? (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h16m-7 6h7"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //       <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    //         <div className="flex-shrink-0">
    //           <img className="h-8 w-auto" src={logo} alt="Vauxhall Logo" />
    //         </div>
    //         <div className="hidden sm:block sm:ml-6">
    //           <div className="flex space-x-4">
    //             <div className="relative group">
    //               <button className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
    //                 Cars
    //               </button>
    //               <div className="absolute left-0 hidden mt-2 w-48 bg-white rounded-md shadow-lg group-hover:block">
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Model 1
    //                 </a>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Model 2
    //                 </a>
    //               </div>
    //             </div>
    //             <div className="relative group">
    //               <button className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
    //                 Vans
    //               </button>
    //               <div className="absolute left-0 hidden mt-2 w-48 bg-white rounded-md shadow-lg group-hover:block">
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Model 1
    //                 </a>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Model 2
    //                 </a>
    //               </div>
    //             </div>
    //             <div className="relative group">
    //               <button className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
    //                 Electric
    //               </button>
    //               <div className="absolute left-0 hidden mt-2 w-48 bg-white rounded-md shadow-lg group-hover:block">
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Model 1
    //                 </a>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
    //                 >
    //                   Model 2
    //                 </a>
    //               </div>
    //             </div>
    //             <a
    //               href="#"
    //               className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Offers
    //             </a>
    //             <a
    //               href="#"
    //               className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Owners
    //             </a>
    //             <a
    //               href="#"
    //               className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Business
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //         <button className="bg-gray-800 text-white p-1 rounded-full hover:bg-gray-700">
    //           <span className="sr-only">View notifications</span>
    //           <svg
    //             className="h-6 w-6"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //             />
    //           </svg>
    //         </button>
    //         <button className="bg-gray-800 text-white p-1 rounded-full hover:bg-gray-700 ml-4">
    //           <span className="sr-only">Search</span>
    //           <svg
    //             className="h-6 w-6"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M10 4a6 6 0 016 6v1a4 4 0 01-4 4H7m0 0a4 4 0 01-4-4v-1a6 6 0 0112 0v1a4 4 0 01-4 4m0 4h.01"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
    //     id="mobile-menu"
    //   >
    //     <div className="px-2 pt-2 pb-3 space-y-1">
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Cars
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Vans
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Electric
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Offers
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Owners
    //       </a>
    //       <a
    //         href="#"
    //         className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Business
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    // <nav className="bg-white border-b">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between h-16">
    //       <div className="flex">
    //         <div className="flex-shrink-0 flex items-center">
    //           <img className="h-8 w-auto" src={logo} alt="Vauxhall Logo" />
    //         </div>
    //         <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-red-500 text-sm font-medium text-gray-900"
    //           >
    //             Home
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Cars
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Vans
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Electric
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Used
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Offers
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Motability
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Business
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Service & Maintenance
    //           </a>
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
    //           >
    //             Discover Vauxhall
    //           </a>
    //         </div>
    //       </div>
    //       <div className="hidden sm:ml-6 sm:flex sm:items-center">
    //         <a href="#" className="text-sm font-medium text-gray-900">
    //           MyVauxhall
    //         </a>
    //         <a href="#" className="ml-4 text-sm font-medium text-gray-900">
    //           Build & Price
    //         </a>
    //         <a href="#" className="ml-4 text-sm font-medium text-gray-900">
    //           Find a Retailer
    //         </a>
    //       </div>
    //       <div className="flex items-center sm:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           {!isOpen ? (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h16m-7 6h7"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
    //     id="mobile-menu"
    //   >
    //     <div className="pt-2 pb-3 space-y-1">
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-red-500 text-base font-medium text-gray-700 bg-red-50"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Cars
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Vans
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Electric
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Used
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Offers
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Motability
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Business
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Service & Maintenance
    //       </a>
    //       <a
    //         href="#"
    //         className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
    //       >
    //         Discover Vauxhall
    //       </a>
    //     </div>
    //     <div className="pt-4 pb-3 border-t border-gray-200">
    //       <div className="px-2 space-y-1">
    //         <a
    //           href="#"
    //           className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
    //         >
    //           MyVauxhall
    //         </a>
    //         <a
    //           href="#"
    //           className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
    //         >
    //           Build & Price
    //         </a>
    //         <a
    //           href="#"
    //           className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
    //         >
    //           Find a Retailer
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <div>
      {/* First Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center pb-2">
                <img className="h-18 w-28" src={logo} alt="Vauxhall Logo" />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <a href="#" className="text-sm font-medium text-gray-900">
                MyVauxhall
              </a>
              <a href="#" className="ml-4 text-sm font-medium text-gray-900">
                Build & Price
              </a>
              <a href="#" className="ml-4 text-sm font-medium text-gray-900">
                Find a Retailer
              </a>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden sm:flex sm:space-x-8 pt-3">
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-red-500 text-sm font-medium text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Cars
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Vans
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Electric
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Used
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Offers
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Motability
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Business
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Service & Maintenance
            </a>
            <a
              href="#"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 hover:border-gray-300"
            >
              Discover Vauxhall
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-red-500 text-base font-medium text-gray-700 bg-red-50"
          >
            Home
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Cars
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Vans
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Electric
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Used
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Offers
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Motability
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Business
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Service & Maintenance
          </a>
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          >
            Discover Vauxhall
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              MyVauxhall
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Build & Price
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Find a Retailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
