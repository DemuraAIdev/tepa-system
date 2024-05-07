/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import Brand from "./Brand";
import { Link as ScrollLink } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FaMoon, FaSun } from "react-icons/fa6/index.esm";

export default function Navbar() {
    // For responsive navbar
    let [open, setOpen] = useState(false);

    // change language
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);

    return (
        <div
            className="bg-base-100 md:backdrop-blur-xl text-base-content sticky top-0 z-30 flex h-16 w-full justify-center  transition-shadow duration-100 
  shadow-sm px-7 md:px-[7.5em]"
        >
            <nav className="navbar w-full">
                <div className="flex-1 ">
                    <a href="#" className="text-3xl text-indigo-700 mr-1">
                        <Brand />
                    </a>
                    <button
                        onClick={() =>
                            changeLanguage(i18n.language === "en" ? "id" : "en")
                        }
                        className="btn btn-ghost"
                    >
                        {i18n.language.toUpperCase()}
                    </button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex md:static">
                        <li className="md:ml-8 md:my-0 my-7 text-base font-body">
                            <ScrollLink
                                to="home"
                                href="#home"
                                smooth={false}
                                offset={-500}
                                duration={500}
                                className="text-body  hover:text-indigo-500 transition duration-300 font-normal"
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="md:ml-8 md:my-0 my-7 text-base font-body">
                            <ScrollLink
                                to="travel"
                                href="#travel"
                                smooth={true}
                                offset={-20}
                                duration={500}
                                className="text-body  hover:text-indigo-500 transition duration-300 font-normal"
                            >
                                K-One Travel
                            </ScrollLink>
                        </li>
                        <li className="md:ml-8 md:my-0 my-7 text-base font-body">
                            <ScrollLink
                                to="minibank"
                                href="#minibank"
                                smooth={true}
                                offset={-150}
                                duration={500}
                                className="text-body  hover:text-indigo-500 transition duration-300 font-normal"
                            >
                                Mini Bank
                            </ScrollLink>
                        </li>
                        <li className="md:ml-8 md:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ">
                            <Link
                                href={route("supplies")}
                                className="md:border-2 md:border-gray-800 md:py-2 md:px-4 md:rounded-xl md:overflow-hidden md:hover:bg-indigo-500 md:hover:border-indigo-500 md:hover:text-gray-200 transition-all duration-300"
                            >
                                Supplies
                            </Link>
                        </li>
                        <li className="md:ml-8 md:my-0 my-7 text-sm font-body light:text-gray-800 hover:text-indigo-500 ">
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input
                                    type="checkbox"
                                    data-toggle-theme="dark,light"
                                />

                                <FaMoon className="swap-on fill-current h-7" />
                                <FaSun className="swap-off fill-current h-7" />
                            </label>
                        </li>
                    </ul>
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-xl absolute right-8 top-6 cursor-pointer lg:hidden"
                    >
                        <FaBarsStaggered name="{open ? 'close':'menu'}" />
                    </div>
                    <ul
                        className={`lg:hidden cursor-pointer  lg:items-center md:pb-0 pb-12 lg:static z-[100] left-0 w-full lg:w-auto lg:pl-auto pl-9 transition-all duration 500 ease-in-out absolute  ${
                            open
                                ? "top-16 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  bg-base-100"
                                : "top-[-100vh]"
                        }`}
                    >
                        <li className="lg:ml-8 lg:my-0 my-7 text-base font-body">
                            <ScrollLink
                                to="home"
                                href="#home"
                                spy={true}
                                smooth={true}
                                offset={-500}
                                duration={500}
                                className="text-body  hover:text-indigo-500 transition duration-300 font-normal"
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="lg:ml-8 lg:my-0 my-7 text-base font-body">
                            <ScrollLink
                                to="travel"
                                href="#travel"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                                className="text-body  hover:text-indigo-500 transition duration-300 font-normal"
                            >
                                K-One Travel
                            </ScrollLink>
                        </li>
                        <li className="lg:ml-8 lg:my-0 my-7 text-base font-body">
                            <ScrollLink
                                to="minibank"
                                href="#minibank"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                                className="text-body  hover:text-indigo-500 transition duration-300 font-normal"
                            >
                                Mini Bank
                            </ScrollLink>
                        </li>
                        <li className="lg:ml-8 lg:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ">
                            <Link
                                href={route("supplies")}
                                className="lg:border-2 lg:border-gray-800 lg:py-2 lg:px-4 lg:rounded-xl lg:overflow-hidden lg:hover:bg-indigo-500 lg:hover:border-indigo-500 lg:hover:text-gray-200 transition-all duration-300"
                            >
                                Supplies
                            </Link>
                        </li>
                        <li className="lg:ml-8 lg:my-0 my-7 text-base font-body light:text-gray-800 hover:text-indigo-500 ">
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input
                                    type="checkbox"
                                    data-toggle-theme="dark,light"
                                />

                                {/* sun icon */}
                                <FaMoon className="swap-on fill-current h-7" />
                                <FaSun className="swap-off fill-current h-7" />
                            </label>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
