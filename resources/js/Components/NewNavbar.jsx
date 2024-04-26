// <div className="shadow-md sticky top-0 z-30">
//     <nav className="navbar w-full bg-base-100 ">
//         <div className="navbar-start">
//             <a className="btn btn-ghost text-xl">daisyUI</a>
//             <a href="#" className=" text-3xl text-indigo-700 ">
//                 <Brand />
//             </a>
//         </div>
//         <div className="md:flex items-center justify-between py-4 px-7 md:px-[7.5em]  z-[2]">
//             <div className="font-bold  text-2xl cursor-pointer flex items-center font-body text-gray-800">

//                 <a href="#" className="text-3xl text-indigo-700 mr-1">
//                     <Brand />
//                 </a>
//                 <button onClick={() => changeLanguage(i18n.language === 'en' ? 'id' : 'en')} className="btn">
//                     {i18n.language.toUpperCase()}
//                 </button>
//             </div>
//             <div onClick={() => setOpen(!open)} className="text-xl absolute right-8 top-6 cursor-pointer md:hidden">
//                 <FaBarsStaggered name="{open ? 'close':'menu'}" />
//             </div>
//             <ul className={`cursor-pointer md:flex md:items-center md:pb-0 pb-12 md:static z-[100] left-0 w-full md:w-auto md:pl-auto pl-9 transition-all duration 500 ease-in-out absolute  ${open ? 'top-16 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  bg-base-100' : 'top-[-100vh]'}`}>
//                 <li className="md:ml-8 md:my-0 my-7 text-base font-body">
//                     <ScrollLink to="home" href="#home" spy={true} smooth={true} offset={-500} duration={500} className="text-body  hover:text-indigo-500 transition duration-300 font-normal">Home</ScrollLink>
//                 </li>
//                 <li className="md:ml-8 md:my-0 my-7 text-base font-body">
//                     <ScrollLink to="travel" href="#travel" spy={true} smooth={true} offset={-20} duration={500} className="text-body  hover:text-indigo-500 transition duration-300 font-normal">K-One Travel</ScrollLink>
//                 </li>
//                 <li className="md:ml-8 md:my-0 my-7 text-base font-body">
//                     <ScrollLink to="minibank" href="#minibank" spy={true} smooth={true} offset={-150} duration={500} className="text-body  hover:text-indigo-500 transition duration-300 font-normal">Mini Bank</ScrollLink>
//                 </li>
//                 <li className="md:ml-8 md:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ">
//                     <Link href={route("supplies")}
//                         className="md:border-2 md:border-gray-800 md:py-2 md:px-4 md:rounded-xl md:overflow-hidden md:hover:bg-indigo-500 md:hover:border-indigo-500 md:hover:text-gray-200 transition-all duration-300">
//                         Supplies
//                     </Link>
//                 </li>
//                 <li className="md:ml-8 md:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ">
//                     <label className="swap swap-rotate">

//                         {/* this hidden checkbox controls the state */}
//                         <input type="checkbox" data-toggle-theme="dark,light" />

//                         {/* sun icon */}
//                         <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

//                         {/* moon icon */}
//                         <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

//                     </label>
//                 </li>
//             </ul>
//         </div>
//     </nav>
// </div>