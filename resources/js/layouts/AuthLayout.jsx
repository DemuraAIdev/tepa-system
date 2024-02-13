import { useState } from 'react';
import { Link as RouteLink, usePage } from '@inertiajs/react';
import BrandLogo from "@/Components/BrandLogo";
import { FaPowerOff, FaPerson, FaInfo } from 'react-icons/fa6'
import { AiFillDashboard, AiOutlineOrderedList } from 'react-icons/ai'
import { FiDollarSign } from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";
import { FaBoxOpen } from 'react-icons/fa'

export default function Authenticated({ user, header, children }) {
    const [open, setOpen] = useState(true);
    const users = usePage().props.auth.user;
    const isSuperAdmin = usePage().props.auth.isSuperAdmin;
    const Menus = [
        { title: "Dashboard", src: <AiFillDashboard />, href: "dashboard" },
        { title: "Products", src: <FaBoxOpen />, href: "product" },
        { title: "Report", src: <AiOutlineOrderedList />, href: "report" },
    ];

    return (
        <div className="flex">
            <div
                className={`flex flex-col justify-between border-gray-700 border-r-2 ${open ? "w-72" : "w-20 "
                    } bg-dark-purple border-gray-300 h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src="/Image/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-[1px] border-gray-400
                rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div>
                    <div className="flex gap-x-4 items-center">
                        <RouteLink href="/" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}>
                            <BrandLogo />
                        </RouteLink>
                        <h1
                            className={`text-indigo-600 origin-left font-body font-semibold text-xl duration-200 ${!open && "hidden"
                                }`}
                        >
                            Technopark
                        </h1>
                        
                    </div>
                    <p>
                    {isSuperAdmin && <span className="text-xs text-red-500">SuperAdmin</span>}
                    </p>
                    <div>
                        <ul className="pt-6">
                            {
                                isSuperAdmin &&

                                <><li
                                    className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                                        } `}
                                >
                                    <RouteLink href={route("dashboard")} className='flex gap-4'>
                                        <div className='text-lg'>
                                            <AiFillDashboard />
                                        </div>
                                        <span className={`${!open && "hidden"} origin-left duration-200`}>

                                            Dashboard
                                        </span>
                                    </RouteLink>
                                </li><li
                                    className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                                        } `}
                                >
                                        <RouteLink href={route("product")} className='flex gap-4'>
                                            <div className='text-lg'>
                                                <FaBoxOpen />
                                            </div>
                                            <span className={`${!open && "hidden"} origin-left duration-200`}>

                                                Products
                                            </span>
                                        </RouteLink>
                                    </li><li
                                        className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                                        } `}
                                    >
                                        <RouteLink href={route("adminadd")} className='flex gap-4'>
                                            <div className='text-lg'>
                                                <RiAdminFill />
                                            </div>
                                            <span className={`${!open && "hidden"} origin-left duration-200`}>

                                                Admins
                                            </span>
                                        </RouteLink>
                                    </li></>
                            }
                                                        <li
                                className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt"
                                        } `}
                            >
                                <RouteLink href={route("selling")} className='flex gap-4'>
                                    <div className='text-lg'>
                                        <FiDollarSign />
                                    </div>
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>

                                        Selling
                                    </span>
                                </RouteLink>
                            </li>

                            <li
                                className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt"
                                        } `}
                            >
                                <RouteLink href={route("report")} className='flex gap-4'>
                                    <div className='text-lg'>
                                        <AiOutlineOrderedList />
                                    </div>
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>

                                        Report
                                    </span>
                                </RouteLink>
                            </li>
                            

                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="pt-6">
                        <li
                            className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 bg-light-white`}
                        >
                            <RouteLink href={route('profile.edit')} as='button' className='flex gap-4 items-center'>
                                <FaPerson />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>

                                    {users.name}

                                </span>
                            </RouteLink>
                        </li>
                        <li
                            className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 bg-light-white`}
                        >
                            <RouteLink href={route('dev')} as='button' className='flex gap-4 items-center'>
                                <FaInfo />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>

                                    About

                                </span>
                            </RouteLink>
                        </li>
                        <li
                            className={`flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 bg-light-white`}
                        >
                            <RouteLink method="post" href={route('logout')} as='button' className='flex gap-4 items-center'>
                                <FaPowerOff />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>

                                    Logout

                                </span>
                            </RouteLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="h-screen overflow-y-auto flex-1 p-7">
                <main>{children}</main>
            </div>
        </div>
    );
}
