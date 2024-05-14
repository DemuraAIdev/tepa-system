// src/components/Tab.js
import FirstTab from "@/Components/FirstTab";
import SecondTab from "@/Components/SecondTab";
import { useState } from "react";
import AuthLayout from "@/Layouts/AuthLayout";

const SellingTabs = () => {
    return (
        <div className="bg-[#171d23] md:w-full  min-h-[90vh] p-7 flex flex-col items-center justify-center font-body">
            <div className="bg-[#1D232A] p-7 flex flex-col gap-7 rounded-xl shadow-md">
                <div className="text-center font-bold text-white text-2xl">
                    <h1 className="uppercase font-body">Item Registration</h1>
                </div>
                <div>
                    <form className="flex items-center gap-4 justify-center">
                        <input
                            type="number"
                            id="itemId"
                            name="itemId"
                            placeholder="Here goes the item's id..."
                            className="input input-bordered border-[1px] border-gray-700 md:w=[75%] px-4 py-2 bg-[#171d23] text-sm"
                        />
                        <button className="btn border-[1px] border-gray-700 hover:text-white hover:border-gray-500 text-sm">
                            Ok
                        </button>
                    </form>
                </div>
                <div>
                    <div className="overflow-x-auto border-b-[1px] border-gray-700 pb-7">
                        <table className="table mx-auto">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    Sempak Rimuru
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            className="focus:outline-none px-3 py-2 rounded-md bg-[#171d23] border-[1px] border-gray-700"
                                        />
                                    </td>
                                    <td>500000</td>
                                    <td>total</td>
                                    <th>
                                        <button className="btn bg-red-500 text-white font-bold btn-xs">
                                            Delete
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr></tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 ">
                    <input
                        type="text"
                        id="total"
                        name="total"
                        placeholder="Grand Total"
                        className="input input-bordered border-[1px] border-gray-700 md:w=[75%] px-4 py-2 bg-[#171d23] text-sm "
                        disabled
                    />
                    <button className="uppercase font-bold btn border-gray-700 hover:border-gray-500">
                        Print
                    </button>
                </div>
            </div>
        </div>
    );
};

SellingTabs.layout = (page) => <AuthLayout children={page} />;

export default SellingTabs;
