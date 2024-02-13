/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from '@inertiajs/react';
import Brand from './Brand';
import { Link as ScrollLink } from 'react-scroll';
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {

    // For responsive navbar
    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between py-4 px-7 md:px-[7.5em] bg-gray-200 z-[2]">
                <div className="font-bold  text-2xl cursor-pointer flex items-center font-body text-gray-800">
                    <a href="#" className="text-3xl text-indigo-700 mr-1">
                        <Brand />
                    </a>
                </div>
                <div onClick={() => setOpen(!open)} className="text-xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <FaBarsStaggered name="{open ? 'close':'menu'}" />
                </div>
                <ul className={`cursor-pointer md:flex md:items-center md:pb-0 pb-12 md:static z-[100] left-0 w-full md:w-auto md:pl-auto pl-9 transition-all duration 500 ease-in-out absolute bg-gray-200 ${open ? 'top-16 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]' : 'top-[-100vh]'}`}>
                <li className="md:ml-8 md:my-0 my-7 text-base font-body">
                        <ScrollLink to="home" href="#home" spy={true} smooth={true} offset={-500} duration={500} className="text-body text-gray-800 hover:text-indigo-500 transition duration-300 font-normal">Home</ScrollLink>
                    </li>
                    <li className="md:ml-8 md:my-0 my-7 text-base font-body">
                        <ScrollLink to="travel" href="#travel" spy={true} smooth={true} offset={-20} duration={500} className="text-body text-gray-800 hover:text-indigo-500 transition duration-300 font-normal">K-One Travel</ScrollLink>
                    </li>
                    <li className="md:ml-8 md:my-0 my-7 text-base font-body">
                        <ScrollLink to="minibank" href="#minibank" spy={true} smooth={true} offset={-150} duration={500} className="text-body text-gray-800 hover:text-indigo-500 transition duration-300 font-normal">Mini Bank</ScrollLink>
                    </li>
                    <li className="md:ml-8 md:my-0 my-7 text-base font-body text-gray-800 hover:text-indigo-500 ">
                        <Link href={route("supplies")}
                            className="md:border-2 md:border-gray-800 md:py-2 md:px-4 md:rounded-xl md:overflow-hidden md:hover:bg-indigo-500 md:hover:border-indigo-500 md:hover:text-gray-200 transition-all duration-300">
                            Supplies
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}