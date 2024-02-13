// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Brand from './Brand';
import { FaBarsStaggered } from "react-icons/fa6";
import ShopSearchBar from "./ShopSearchBar";
import { Link } from '@inertiajs/react';

const ShopNavbar = () => {
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between py-4 px-7 md:px-[7.5em] bg-gray-200 z-[2]">
                <div className="font-bold  text-2xl cursor-pointer flex items-center font-body text-gray-800">
                    <Link href="/" className="text-3xl text-indigo-700 mr-1">
                        <Brand />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className="text-xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <FaBarsStaggered name="{open ? 'close':'menu'}" />
                </div>
                <ul className={`md:bg-none bg-gray-200 cursor-pointer md:flex md:items-center md:pb-0 p-2 md:static z-[100] left-0 w-full md:w-auto md:pl-auto pl-9 transition-all duration 500 ease-in-out absolute  md:border-none border-[1px] border-gray-300 ${open ? 'top-16 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]' : 'top-[-100vh]'}`}>
                    <li className="md:ml-8 text-base font-body">
                        <ShopSearchBar />
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default ShopNavbar